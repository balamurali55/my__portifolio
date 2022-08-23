import React from "react";
import react from "./assets/react.jpg";
import ui from "./Skills/GIT.jpg";
import wd from "./Skills/Javascript.png";
import wd2 from "./Skills/html5-css3-hd.jpg";
import wd3 from "./Skills/ES6.jpg";
import wd4 from "./Skills/API.jpg";
import wd5 from "./Skills/bootstrap-icons.png";
import wd6 from "./Skills/Material UI.png";
import wd7 from "./Skills/redux.png";
import wd8 from "./Skills/377-3772047_sass-logo.png";
import wd9 from "./Skills/react.png";
import wd10 from './Skills/babel.png'
import "./Styles/Works.SCSS.css";

const Works = () => {
  return (
    <div className="works">
      <div className="work__section">
        <div className="cards">
          <img src={react} alt="" />
        </div>

        <div className="cards">
          <img src={ui} alt="" />
        </div>

        <div className="cards">
          <img src={wd} alt="" />
        </div>

        <div className="cards">
          <img src={wd2} alt="" />
        </div>

        <div className="cards">
          <img src={wd3} alt="" />
        </div>

        <div className="cards">
          <img src={wd4} alt="" />
        </div>

        <div className="cards">
          <img src={wd5} alt="" />
        </div>

        <div className="cards">
          <img src={wd6} alt="" />
        </div>

        <div className="cards">
          <img src={wd7} alt="" />
        </div>

        <div className="cards">
          <img src={wd8} alt="" />
        </div>

        <div className="cards">
          <img src={wd9} alt="" />
        </div>

        <div className="cards">
          <img src={wd10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
