import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import './App.css';
import Homepage from "./homepage/Homepage";
import Footer from "./footer/Footer";
import { useStore } from "./store";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import Login from "./login/Login";
import Register from "./register/Register"; 

const location = new ReactLocation();

export default function App() {

  const token = useStore((state) => state.token);

  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    }
  ];

  console.log("Token: " + token)
  return (
    <>
      <Router routes={routes} location={location}>
        <Navbar />
        <Outlet />
        <Footer />
      </Router>
    </>
  );
}