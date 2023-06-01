import React from "react";
import "./Dev.css";
import DevBio from "./DevBio.png";

const Dev = () => {
  return (
    <div className="dev-main">
      <div className="dev-inner">
        <img className="dev-image" src={DevBio} alt="Lorraineer" />
      </div>
    </div>
  );
};

export default Dev;
