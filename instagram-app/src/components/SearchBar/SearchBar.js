import React from "react";
// import { SearchBox } from "react-instantsearch-dom";
import Nav from "./Nav";
import "./SearchBar.css";
import { IconContext } from "react-icons";
import { FiInstagram, FiCompass, FiHeart, FiUser } from "react-icons/fi";

const SearchBar = ({search}) => {
  return (
    <IconContext.Provider value={{ className: "react-icon" }}>
      <div className="nav-bar">
        <div className="icons">
          <div>
            <Nav url="#" icon={<FiInstagram />} />
          </div>
          <h3>Instagram</h3>
        </div>

        <div className="search-input">
          {/* <SearchBox /> */}
          <input input="text" placeholder="Search" onChange = {search} />
        </div>

        <div>
          <Nav url="#" icon={<FiCompass />} />
          <Nav url="#" icon={<FiHeart />} />
          <Nav url="#" icon={<FiUser />} />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default SearchBar;
