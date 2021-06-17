import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../navBar/navBar";
import * as classes from "./header.module.css";
import Button from "react-bootstrap/Button";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import top_portrait from "../../images/top_portrait.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [btnSize, setBtnSize] = useState("lg");
  const handleDownloadResume = async () => {
    const response = await axios({
      url: "/api/download_resume",
      method: "GET",
      responseType: "blob",
    });
    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "ilan-kanatenko-resume.pdf");
    // document.body.appendChild(link);
    link.click();
    // console.log(url);
    // console.log([response.data]);
    // console.log(response.data);
    // console.log(response);
    //window.pageYOffset
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1290) {
        setBtnSize("sm");
      } else {
        setBtnSize("lg");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  });

  return (
    <React.Fragment>
      <NavBar />
      <Container
        fluid
        className={classes.Container}
        id={classes.ContainerOverride}
      >
        <h1 className="HeaderFont">Ilan Kanatenko</h1>
        <div className="TextFont">
          <p>FullStack Developer</p>
          {/* <img
            className={classes.TopPortrait}
            src={top_portrait}
            alt="portrait"
          /> */}
          <div className="mt-5">
            <Link to="/projects">
              <Button
                className={classes.M_b}
                variant="outline-primary"
                size={btnSize}
              >
                {" "}
                View Portfolio <FaAngleRight />
              </Button>
            </Link>{" "}
            <Button
              className={classes.M_b}
              onClick={() => handleDownloadResume()}
              variant="primary"
              size={btnSize}
            >
              {" "}
              Download Resume <FaAngleRight />
            </Button>
          </div>
        </div>
      </Container>
      {/* props.imagesSrc = ; */}
    </React.Fragment>
  );
};

export default Header;
