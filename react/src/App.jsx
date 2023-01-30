import { Router, Outlet, ReactLocation } from "@tanstack/react-location";
import './App.css';
import VideoUpload from "./videoUpload/VideoUpload";
import Homepage from "./homepage/Homepage";
import Footer from "./footer/Footer";

const location = new ReactLocation();

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "upload",
      element: <VideoUpload />,
    },
  ];

  return (
    <>
      <Router routes={routes} location={location}>
          <Outlet />
        <Footer />
      </Router>
    </>
  );
}