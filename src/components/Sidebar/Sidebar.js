import React from "react";
import "./Styles.css";
import { SidebarData } from "./SidebarData";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="list">
        {SidebarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              key={key}
            >
              <Link to={val.link}>
                <div className="list-items">
                  <span id="icon">{val.icon}</span>
                  <span id="title">{val.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
