import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import * as classes from "./mailer.module.css";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const Mailer = (props) => {
  const { email, isAuth } = useSelector((state) => state.auth);

  const [subjectContent, setSubjectContent] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [responseMassage, setResponseMassage] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const clickHandler = async (event) => {
    setLoadingBtn(true);
    event.preventDefault();
    const response = await axios.post("/api/send_mail", {
      subjectContent: subjectContent,
      messageContent: messageContent,
    });
    setLoadingBtn(false);
    setShow(true);
    setSubjectContent("");
    setMessageContent("");
    console.log(loadingBtn);
    console.log(response);
    // if (condition) {

    // }
    setResponseMassage("Email sent successfully");
    // the email has been sent successfully
  };
  return (
    <React.Fragment>
      <Form className={classes.MailerForm}>
        {isAuth ? (
          <React.Fragment>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control plaintext readOnly defaultValue={email} />
                {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
            </Form.Row>

            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                value={subjectContent}
                onChange={(event) => setSubjectContent(event.target.value)}
                type="text"
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                value={messageContent}
                onChange={(event) => setMessageContent(event.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <div>
              <Button
                onClick={clickHandler}
                size="lg"
                className={classes.MailerButton}
                variant="primary"
                type="submit"
                disabled={loadingBtn}
              >
                {loadingBtn && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {loadingBtn ? "Sending" : "Send"}
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              to send an email you need to login with google first
            </Form.Label>
          </Form.Group>
        )}
      </Form>
      <Modal
        dialogClassName={classes.Modal}
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{responseMassage}</Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Mailer;
