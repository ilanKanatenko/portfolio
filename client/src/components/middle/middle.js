import React from "react";
import * as classes from "./middle.module.css";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import ImgList from "../imgList/imgList";

const middle = (props) => {
  return (
    <section className={classes.MiddleSection + " Section"}>
      <div className="Container">
        <h1 className="SideHeader">Portfolio</h1>
        <p className="Textarea">
          2 recent projects that were written using react and node.
        </p>
      </div>
      <ImgList />
    </section>
  );
};

export default middle;
