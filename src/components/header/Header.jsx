import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };
  return (
    <header className="header">
      <div className="left">
        <Link to="/" className="logo">
          inna's NC-NEWS
        </Link>
      </div>

      <div className="middle">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="votes">Sort by Votes</option>
          <option value="comments">Sort by Comments</option>
        </select>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="right">
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
