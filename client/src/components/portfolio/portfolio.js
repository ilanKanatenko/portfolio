import React, { useState, useEffect } from "react";
import NavBar from "../navBar/navBar";
import workspaceImg from "../../images/addtext_com_MDcwMTE1MTY0NQ.jpg";
import * as classes from "./portfolio.module.css";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import ImgCoverflow from "../imgCoverflow/imgCoverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Scrollbar, A11y, Pagination, EffectCoverflow]);

function importAll(r) {
  return r.keys().map(r);
}

const Portfolio = (props) => {
  const btnsContent = [
    {
      header: "Burger Builder",
      path: "burgerApp",
      description: "web app for ordering your perfect burger",
    },
    {
      header: "Emaily",
      path: "emailyApp",
      description:
        "Web app thats provides large feedback-collection via emails ",
    },
    {
      header: "Museum Robot",
      path: "robot",
      description: "Robot thats provides interactive museum tour",
    },
    {
      header: "WeShare",
      path: "weShare",
      description:
        "Forum for ruppin student to share resources, was built using C# and .Net frame work",
    },
    {
      header: "Secrets",
      path: "secrets",
      description: "Small Web app thats displays users secrets anonymously ",
    },
    {
      header: "TodoList",
      path: "todoList",
      description:
        "Small Web app thats provides a TodoList for every day use  ",
    },
  ];
  //temp
  //   const imgs = importAll(
  //     require.context(
  //       "../../images/projects/burgerApp",
  //       false,
  //       /\.(png|jpe?g|svg)$/
  //     )
  //   );

  // temp to
  const [btnsVertical, setBtnsVertical] = useState(false);
  const [imgs, setImgs] = useState([]);

  const [header, setHeader] = useState("");
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setBtnsVertical(true);
      } else {
        setBtnsVertical(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  });

  //temp here
  const temp = [];
  const components = require.context(
    "../../images/projects",
    true,
    /\.(png|jpe?g|svg)$/,
    "eager"
  );

  const clickHandler = (event) => {
    components.keys().filter(async (filePath) => {
      // load the component
      if (filePath.includes(event.target.value)) {
        Promise.allSettled([
          components(filePath).then((module) => temp.push(module)),
        ]).then(() => {
          setImgs([...temp]);
        });
      }
    });
    console.log(event.target);
    console.log(event.target.attributes[0].nodeValue);
    console.log(event);
    if (event.target.attributes[0].nodeValue !== "options") {
      setHeader(event.target.attributes[0].nodeValue);
      setParagraph(event.target.attributes[1].nodeValue);
    }

    // console.log("bbbbbb", a);

    // if (event.target.innerText !== "Emaily") {
    //   const selectedImgs = importAll(
    //     require.context(
    //       "../../images/projects/burgerApp",
    //       false,
    //       /\.(png|jpe?g|svg)$/
    //     )
    //   );
    //   let b = a;
    //   console.log("aaaa", temp);
    //   setImgs([...temp]);
    // } else {
    //   const selectedImgs = importAll(
    //     require.context(
    //       "../../images/projects/emailyApp",
    //       false,
    //       /\.(png|jpe?g|svg)$/
    //     )
    //   );
    //   setImgs([...temp]);
    // }
    // console.log(imgs);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.ImgContainer}>
        <img
          className={classes.ImgPortfolio}
          alt="workspace img"
          src={workspaceImg}
        />
      </div>
      <section className="Section">
        <div className={classes.BtnDiv}>
          <ToggleButtonGroup
            vertical={btnsVertical}
            type="radio"
            name="options"
          >
            {btnsContent.map((btnObj) => {
              return (
                <ToggleButton
                  className={classes.Btn}
                  onClick={(event) => clickHandler(event)}
                  variant="outline-primary"
                  value={btnObj.path}
                  header={btnObj.header}
                  description={btnObj.description}
                >
                  {btnObj.header}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
        <br />
        <div className={classes.Container}>
          <h1 className="SideHeader">{header}</h1>
          <p className="Textarea">{paragraph}</p>
        </div>
        {/* temp */}
        <ImgCoverflow imgs={imgs} />
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
