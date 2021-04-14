import React from "react";
import "../../Styles/Header/Header.css";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
function Header({ onClick, onKeyPress }) {
  return (
    <div className="Header">
      <p>Prevision</p>
      <div className="header__main">
        <div className="header--iconStar">
          <GradeOutlinedIcon />
        </div>
        <div className="header--iconPuntos">
          <WbSunnyIcon />
        </div>
        <div className="header__search">
          <input
            id="input_city"
            onKeyPress={onKeyPress}
            className="header--input"
            placeholder="Ciudad o codigo postal"
            type="text"
          />
          <div className="header--iconSearch">
            <SearchIcon onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
