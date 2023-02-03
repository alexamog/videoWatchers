import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import './App.css';
import VideoUpload from "./videoUpload/VideoUpload";
import Homepage from "./homepage/Homepage";
import Footer from "./footer/Footer";
import Login from "./login/Login";
import Register from "./register/Register";
import { useStore } from "./store";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";

const location = new ReactLocation();

export default function App() {

  const token = useStore((state) => state.token);

  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "upload",
      element: <VideoUpload />,
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
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