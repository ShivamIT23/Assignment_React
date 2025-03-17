import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import EventListingPage from "../components/EventListingPage";
import About from "../components/About";
import Navbar from "../components/Navigation";

export default function App() {
  return (
    <div>
      <Router>
        <div className="min-h-fit flex flex-col items-center justify-start bg-black p-4 ">
         <Navbar /> 
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
