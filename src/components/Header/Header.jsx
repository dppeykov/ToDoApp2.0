import React from "react";
import Logo from "./logo.png";

const Header = ({ userName, changingUserName }) => (
  <div className="d-sm-flex align-items-sm-center justify-content-sm-between bg-info text-white text-center p-3">
    <div className="d-sm-flex align-items-sm-center">
      <img src={Logo} alt="Checklist Logo" width="64px" />
      <h4 className="p-3">
        {userName.length > 0 ? `${userName}'s` : null} To Do List
      </h4>
    </div>

    <input
      onChange={changingUserName}
      className="rounded-pill border-0 text-center w-auto h-auto"
      placeholder="Your name here"
    />
  </div>
);

export default Header;
