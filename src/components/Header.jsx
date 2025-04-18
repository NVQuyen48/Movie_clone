// Header.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ onSearch, onToggleMode, theme }) => {
  const [textSearch, setSearch] = useState('');
  const isDark = theme === 'dark';
  const headerBg = isDark ? 'bg-black' : 'bg-white';
  const headerText = isDark ? 'text-white' : 'text-black';

  return (
    <div className={`p-4 ${headerBg} flex justify-between items-center`}>
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="/" className={headerText}>Home</a>
          <a href="#" className={headerText}>About</a>
          <a href="#" className={headerText}>Contact</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className={`p-3 rounded ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          onChange={(e) => setSearch(e.target.value)}
          value={textSearch}
        />
        <button className="p-2 text-white bg-red-600 rounded" onClick={() => onSearch(textSearch)}>
          Search
        </button>
        <button
          className={`p-2 rounded ${isDark ? 'bg-gray-300 text-black' : 'bg-gray-800 text-white'}`}
          onClick={onToggleMode}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Link to="/login">
          <button className="p-2 bg-blue-600 text-white rounded">Login</button>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onToggleMode: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;
