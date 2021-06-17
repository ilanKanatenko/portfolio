import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as classes from "./contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = (props) => {
  return (
    <React.Fragment>
      <Container className={classes.PdnBottom + " " + classes.PdnLeft}>
        <Row>
          <Col sm="auto">
            <Row className={classes.PdnBottom}>
              <h6>GET IN TOUCH</h6>
            </Row>
            <Row className={classes.PdnBottom}>
              <div className={classes.DivRow}>
                {" "}
                <div className={classes.FaDiv}>
                  <FaPhone
                    display="inline"
                    color="#748BF7"
                    size="2em"
                  ></FaPhone>
                </div>
                <div className={classes.ContactDiv}>
                  <h6>Telephone</h6>
                  <p>0543136004</p>
                </div>
              </div>
            </Row>
            <Row>
              <div className={classes.FaDiv}>
                <FaEnvelope
                  display="inline"
                  color="#748BF7"
                  size="2em"
                ></FaEnvelope>
              </div>
              <div className={classes.ContactDiv}>
                <h6>Email</h6>
                <h6>ilankanatenko@gmail.com</h6>
              </div>
            </Row>
          </Col>
          {/* <Col sm="auto">
            <h6> My Projects</h6>
          </Col> */}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
