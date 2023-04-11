import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./Components/LoginPage/LoginComponent";
import CreateAccountComponent from "./Components/CreateAccountPage/CreateAccountComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import HomeComponent from "./Components/HomePage/HomeComponent";
import ResourcesComponent from "./Components/ResourcesPage/ResourcesComponent";
import AffirmationsComponent from "./Components/AffirmationsPage/AffirmationsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AffirmationsComponent from "./Components/AffirmationsPage/AffirmationsComponent";

function App() {
  return (
    // <ResourcesComponent/>
    <BrowserRouter>
    
      <>
        <Routes>
<<<<<<< HEAD
          <Route index element={<LoginComponent />} />
          <Route path="/CreateAccount" element={<CreateAccountComponent />} />
          <Route path="/" element={<NavbarComponent/>}>
            <Route path="Home" element={<HomeComponent />} />
            <Route path="Affirmations" element={<HomeComponent/>}/>
          </Route>
=======
          <Route path="/" element={<LoginComponent />} />
          <Route path="/CreateAccountComponent" element={<CreateAccountComponent />} />
          <Route path="/HomeComponent" element={<HomeComponent />} />
          <Route path="/ResourcesComponent" element={<ResourcesComponent />} />
          <Route path="/AffirmationsComponent" element={<AffirmationsComponent />} />
>>>>>>> f47bd4b286bb55be4b580ce8ba8ce248ef10ef20
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
