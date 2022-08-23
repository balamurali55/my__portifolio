import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import "./Styles/Main.SCSS.css";
import man from "./assets/CSC_0091-01-removebg.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Bala Murali</h1>
            <p>Front-End Engineer</p>
            

            <div className="icons">
              <a href="https://twitter.com/Bmkp1998" target="_blank">
                <Twitter className="icon" />
              </a>
              <a
                href="https://www.instagram.com/bala_murali_pentakota/"
                target="_blank"
              >
                <Instagram className="icon" />
              </a>
              <a
                href="https://www.facebook.com/murali.smart.1238/"
                target="_blank"
              >
                <Facebook className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/bala-murali-krishna-876aa8248/"
                target="_blank"
              >
                <LinkedIn className="icon" />
              </a>
            </div>

            <div className="buttons">
              <button>See My Work</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
