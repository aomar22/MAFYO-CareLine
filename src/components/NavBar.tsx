//Navigate Home, Match, Contact
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          <Link to="/">MAFYO CareLine</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/match" className="text-gray-700 hover:text-blue-600">Match</Link>
        </div>
      </div>
    </nav>
  );
}
