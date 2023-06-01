import React, { useState } from "react";
import "./Styles.css";
import { SidebarData } from "./SidebarData";
import Logo from "./Logo.svg";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [SelectedLink, setSelectedLink] = useState("/");

  // Set the selected link based on the current location
  useState(() => {
    const path = location.pathname;
    setSelectedLink(path);
  }, [location]);

  return (
    <div className="side-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="list">
        {SidebarData.map((val, key) => {
          return (
            <li
              id={SelectedLink === val.link ? "active" : ""}
              className="row"
              key={key}
            >
              <Link to={val.link} onClick={() => setSelectedLink(val.link)}>
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
