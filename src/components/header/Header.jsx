import React from "react";
import "./header.css";
const Navbar = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <h1>Admin dashboard</h1>
        </div>
        <div className="avatar">
          <img
            src="./../../images/icon.png"
            alt="Icon"
            className="avatar-img"
          />
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Navbar;
