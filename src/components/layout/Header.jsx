import React from "react";
import "./header.scss";
import bell from "../../assets/notification.svg"
import user from "../../assets/user.svg"
import friends from "../../assets/friends.svg"
import search from "../../assets/Search.svg"
import logo from "../../assets/logo.png"
import help from "../../assets/help.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="uduX" />
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a className="active-link" href="/">Now Playing</a>
          </li>
          <li>
            <a href="/">Recently Played</a>
          </li>
          <li>
            <a href="/">Genres</a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <div className="artist-label">Artist/Label</div>
        <div className="artist-label">Go Premium</div>
        <div className="header-icons">
          <img src={search} alt="uduX" />
          <img src={bell} alt="uduX" />
          <img src={friends} alt="uduX" />
          <img src={help} alt="uduX" />
        </div>
        <div className="header-profile">
          <img src={user} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
