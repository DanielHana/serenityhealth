
import { useState, useEffect, useContext } from "react";
import { Card, Row } from 'react-bootstrap';
import axios from 'axios';
import heart from '../../Assets/heart.png';
import filledheart from '../../Assets/filled-heart.png';
import DataContext from "../../Context/DataContext";



interface Item {
    id: number;
    quote: string;
}

function ThreeCardDisplay() {
    const [threeCard, setThreeCard] = useState<Item[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const { updatedUserId } = useContext(DataContext);

    useEffect(() => {

        const storedFavorites = JSON.parse(
            localStorage.getItem("favoriteQuotes") || "[]"
        );
        setFavorites(storedFavorites);
    }, []);


    useEffect(() => {
        axios.get<Item[]>('https://serenityhealth.azurewebsites.net/Quotes/GetAllQuotes')
            .then(response => {
                const shuffledItems = response.data.sort(() => Math.random() - 0.5);
                const displayThree = shuffledItems.splice(0, 3);
                setThreeCard(displayThree);
            })
            .catch(error => console.error(error));
    }, []);


    const handleFavoriteClick = (userId: number, quoteId: number) => {
        fetch(
            `https://serenityhealth.azurewebsites.net/Quotes/FavoriteQuote?userId=${userId}&quoteId=${quoteId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // Add quote to favorites list
                setFavorites((prevFavorites) => [...prevFavorites, quoteId]);
            })
            .catch((error) => console.error(error));
    };

    const handleRemoveClick = (userId: number, quoteId: number) => {
        fetch(
            `https://serenityhealth.azurewebsites.net/Quotes/RemoveFavoriteQuote?userId=${userId}&quoteId=${quoteId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // Remove quote from favorites list
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((id) => id !== quoteId)
                );
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        // Save list of favorites to local storage whenever it changes
        localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
    }, [favorites]);


    return (
        <div className='card-spacing'>
            {threeCard.map(item => (
                <div key={item.id}>
                    <Card className='all-quotes-cards'>
                        <a
                            onClick={() =>
                                favorites.includes(item.id)
                                    ? handleRemoveClick(updatedUserId, item.id)
                                    : handleFavoriteClick(updatedUserId, item.id)
                            }
                        >
                            {favorites.includes(item.id) ? (
                                <Row className='heart-row'>
                                <img className='heart'  src={filledheart} alt="Favorite" />
                                </Row>
                            ) : (
                                <Row className='heart-row'>
                                <img className='heart' src={heart} alt="Not favorite" />
                                </Row>
                            )}
                        </a>
                        <Card.Body className='card-body'>
                                

                            {item.quote}
                            </Card.Body>

                    </Card>
                </div>
            ))}
        </div>
    );
}




export { ThreeCardDisplay }