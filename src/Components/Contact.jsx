import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Contact.SCSS.css";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/">
        <ArrowBack className="arrow" />
      </Link>
      <div className="inputs">
        <h1 className="display-1">Contact Me</h1>
        <input type="text" className="rounded" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" className="rounded message" placeholder="Message" />
        <button className="rounded">Send</button>
      </div>
    </div>
  );
};

export default Contact;
