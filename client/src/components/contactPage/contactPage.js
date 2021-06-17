import React from "react";
import Mailer from "../mailer/mailer";
import NavBar from "../navBar/navBar";

const ContactPage = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <Mailer />
    </React.Fragment>
  );
};

export default ContactPage;
