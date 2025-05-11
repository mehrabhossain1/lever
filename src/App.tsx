import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiveWebinars from "./pages/Live-Webinars";
import TopBar from "./components/shared/TopBar";
import Navbar from "./components/shared/Navbar";
import Search from "./components/Search";
import NavLinksBar from "./components/shared/NavLinksBar";
import { Footer } from "./components/shared/Footer";

function App() {
    return (
        <>
            <TopBar />
            <Navbar />
            <Search />
            <Router>
                <NavLinksBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/live-webinars" element={<LiveWebinars />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
