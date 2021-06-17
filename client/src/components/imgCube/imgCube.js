import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import * as classes from "./imgCube.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper";
// import { Swiper, SwiperSlide } from "swiper/core";
// import Swiper from "swiper/bundle";
// import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-cube/effect-cube.scss";

// import "swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube]);

const ImgCube = (props) => {
  const [show, setShow] = useState(false);
  const [imgEventElm, setImgEventElm] = useState("");

  const handleImgClick = (event) => {
    setShow(true);
    setImgEventElm(
      <img
        onClick={(e) => handleImgClick(e)}
        className={classes.ModalImg}
        src={event.target.src}
        alt="i"
      />
    );
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <div style={{ marginBottom: "80px" }}>
        <Swiper
          className={classes.Swiper}
          effect={"cube"}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log("swiper")}
          onSlideChange={() => console.log("slide change")}
        >
          {props.imgs.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  onClick={(event) => handleImgClick(event)}
                  className={classes.Img}
                  src={img.default}
                  alt="i"
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
          ...
        </Swiper>
      </div>
      <Modal
        // contentClassName={classes.ModalImg}
        centered
        show={show}
        onHide={handleClose}
        dialogClassName={classes.ModalSize}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{imgEventElm}</Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ImgCube;
