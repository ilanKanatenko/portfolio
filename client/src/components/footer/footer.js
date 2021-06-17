import React from "react";
import Contact from "../contact/contact";
import Rights from "../rights/rights";
import * as classes from "./footer.module.css";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Div}>
        <section className={"Section " + classes.Footer}>
          <Contact />
          <Rights />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Footer;
