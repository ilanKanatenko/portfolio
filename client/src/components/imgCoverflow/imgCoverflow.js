import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import * as classes from "./imgCoverflow.module.css";
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

const ImgCoverflow = (props) => {
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
          effect={"coverflow"}
          slidesPerView="auto"
          spaceBetween={5}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {props.imgs.map((img) => {
            return (
              <SwiperSlide className={classes.Swiper_Slide}>
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

export default ImgCoverflow;
