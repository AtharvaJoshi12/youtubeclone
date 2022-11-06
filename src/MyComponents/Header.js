import React, { useState } from "react";
import "../Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="YTlogo"
          />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="AJ"
          src="https://media-exp1.licdn.com/dms/image/C5603AQG-OcAZC-Apsw/profile-displayphoto-shrink_200_200/0/1641126144836?e=1647475200&v=beta&t=DyJbJECidtlksir3QdQMH6z_sUUk691u_4Ya9JHWoJU"
        />
      </div>

      <div className="footer">
        <div className="footer_icons">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="footer_icons">
          <WhatshotIcon />
          <p>Trending</p>
        </div>
        <div className="footer_icons">
          <SubscriptionsIcon />
          <p>Subscribtions</p>
        </div>
        <div className="footer_icons">
          <VideoLibraryIcon />
          <p>Library</p>
        </div>
      </div>
    </div>
  );
}
