import React from "react";
import "./Styles/Section.SCSS.css";
import man2 from "./assets/Mypic1.png";

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        {/* <div className="section__img">
          <img src={man2} alt="" />
        </div> */}

        <div className="section__content">
          <h1>Who is Bala</h1>
          <p>2+ years experience in Web Development</p>
          <p>Proficient in Front-End Developer    </p>
          <p>Javascript Developer    </p>
          <p>React js Developer</p>
          <p>   
            Developing and implementing front-end architecture 
                </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
