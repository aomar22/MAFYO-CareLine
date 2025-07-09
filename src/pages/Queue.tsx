import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Queue from "./pages/Queue";
const Queue = () => <div>Queue Page Placeholder</div>;
// import other pages...

const App: React.FC = () => (
    <Router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/queue">Queue</Link></li>
                {/* Add other links */}
            </ul>
        </nav>
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/queue" element={<Queue />} />
            {/* Add other routes */}
        </Routes>
    </Router>
);

export default App;
