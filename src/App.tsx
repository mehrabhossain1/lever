import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiveWebinars from "./pages/Live-Webinars";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/live-webinars" element={<LiveWebinars />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
