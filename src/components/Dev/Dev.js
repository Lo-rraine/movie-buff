import React from "react";
import "./Dev.css";
import theDev from "./theDev.jpg";

const Dev = () => {
  return (
    <div className="dev-main">
      <div className="dev-inner">
        <p>
          Introducing <strong>Lorraine</strong>,
        </p>
        <img className="dev-image" src={theDev} alt="Lorraineer" />
        <div className="dev-text">
          <p>
            The friendly neighborhood developer who's constantly caught in a
            whirlwind of JavaScript, C#, and a whole bunch of APIs
          </p>
          <p>
            With a knack for breaking and building applications, she dances
            through the coding universe. This is her digital escapades, where
            laughter, curiosity, and the occasional bug fix collide.
          </p>
        </div>
        <h1>resources: https://dribbble.com/shots/5660843-Movie-card</h1>
      </div>
    </div>
  );
};

export default Dev;
