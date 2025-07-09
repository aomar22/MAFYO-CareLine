import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Match from './pages/Match';
import NavBar from './components/NavBar';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 p-10">
<h1 className="text-4xl font-bold text-blue-700 mb-4">
  Welcome to MAFYO CareLine
</h1>

<p className="text-xl font-semibold text-gray-700 text-center max-w-2xl">
  Multilingual. <br/>Accessible. <br/>Fast.
</p>

{/* <p className="text-md text-gray-700 text-center max-w-2xl mt-2 italic">
  Your Ongoing access to health care.
</p> */}
<p className="text-md text-gray-600 text-center max-w-2xl mt-2 tracking-wide">
  Your Opportunity to access smarter care.
</p>



    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </Router>
  );
}

export default App;
// This code sets up a simple React application with routing.