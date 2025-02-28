import test from "../Components/HomePage/HomeComponent";

let userLoginData = {};


  async function loginFetch(loginUser: any){
    const res = await fetch(
      "https://serenityhealth.azurewebsites.net/User/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(loginUser)
      }
    );
  
    if(!res.ok){
      const message = `An Error occured ${res.status}`;
      throw new Error(message);
    }
    let data = await  res.json();
    console.log(data);
    return data;
  }

  async function GetLoggedInUserData(email:any){
    let res = await fetch(`https://serenityhealth.azurewebsites.net/user/userbyusername/${email}`);
    let data = await res.json();
    userLoginData = data;
    console.log(userLoginData);
    return data;
  }

  async function createAccount(CreatedUser:any) {
    const res = await fetch(
      "https://serenityhealth.azurewebsites.net/User/AddUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(CreatedUser)
      }
    );
  
    if(!res.ok){
      const message = `An Error occured ${res.status}`;
      throw new Error(message);
    }
    let data = await  res.json();
    console.log(data);
  }

  async function GetFeelingDate(userId:any){
    let res = await fetch(`https://serenityhealth.azurewebsites.net/Feeling/GetAllFeelings/${userId}`);
    let data = await res.json();
    let feelingData = data;
    // console.log(feelingData);
    return data;
  }

  async function GetHasUserLoggedIn(userId:any){
    let res = await fetch(`https://serenityhealth.azurewebsites.net/Journal/HasUserCheckedIn/${userId}`);
    let data = await res.json();
    userLoginData = data;
    console.log(userLoginData);
    return data;
  }

  async function GetHasUserLoggedInFeeling(userId:any){
    let res = await fetch(`https://serenityhealth.azurewebsites.net/Feeling/HasUserCheckedIn/${userId}`);
    let data = await res.json();
    userLoginData = data;
    console.log(userLoginData);
    return data;
  }

  async function CheckInUser(UserCheckIn:any){

    const res = await fetch(
      "https://serenityhealth.azurewebsites.net/Feeling/CheckIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(UserCheckIn)
      }
    );
  
    if(!res.ok){
      const message = `An Error occured ${res.status}`;
      throw new Error(message);
    }
    let data = await  res.json();
    console.log(data);
    return data;
  }

  async function JournalEntryFetch(journalInput2:any){
    const res = await fetch(
      "https://serenityhealth.azurewebsites.net/Journal/JournalEntry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(journalInput2)
      }
    );
    if(!res.ok){
      const message = `An Error occured ${res.status}`;
      throw new Error(message);
    }
    let data = await  res.json();
    console.log(data);
    return data;
  }

  async function CreatedPicture(PicturePassed:any){

    const res = await fetch(
      "https://serenityhealth.azurewebsites.net/Picture/CreatedPicture",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(PicturePassed)
      }
    );
  
    if(!res.ok){
      const message = `An Error occured ${res.status}`;
      throw new Error(message);
    }
    let data = await  res.json();
    console.log(data);
    return data;
  }

  
  
export { loginFetch, GetLoggedInUserData, createAccount, GetFeelingDate, GetHasUserLoggedIn, CheckInUser, JournalEntryFetch, GetHasUserLoggedInFeeling, CreatedPicture} 