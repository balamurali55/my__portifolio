import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Header.SCSS.css";
import pdf from "../locals/balamurali_2yr_experince_n.pdf";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header__logo">
      </div>

      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            {/* <Close className="close" onClick={showMenu} /> */}
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Skills</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a className="Resume" href={pdf} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
