import React, { cloneElement, useState } from "react";
// import Image from "react-bootstrap/Image";
// import ImageGallery from "react-image-gallery";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "react-image-gallery/styles/css/image-gallery.css";
import ImgCube from "../imgCube/imgCube";

function importAll(r) {
  return r.keys().map(r);
}
const ImgList = (props) => {
  const imgs = importAll(
    require.context(
      "../../images/projects/burgerApp",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  //process.env.REACT_APP_BURGER_IMGS_PATH,

  const emailyImgs = importAll(
    require.context(
      "../../images/projects/emailyApp",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  // process.env.REACT_APP_emaily_IMGS_PATH,

  //   return (
  //     <Container>
  //       <Row>
  //         {imgs.map((img) => {
  //           return (
  //             <Col>
  //               {" "}
  //               <Image src={img.default} fluid></Image>{" "}
  //             </Col>
  //           );
  //         })}
  //         {/* <Image src={burgerAppImgs[0].default}></Image>
  //       <Image src={burgerAppImgs[1].default}></Image>
  //       <Image></Image> */}
  //       </Row>
  //     </Container>
  //   );
  //////////////////////////////////// from here
  //   return (
  //     <div className={classes.imgList}>
  //       <ImageGallery
  //         items={imgs.map((img) => {
  //           return { original: img.default, thumbnail: img.default };
  //         })}
  //       />
  //     </div>
  //   );
  console.log("img list", process.env, process.env.GOOGLE_CLIENT_ID);

  return (
    <React.Fragment>
      <ImgCube imgs={imgs}></ImgCube>
      <ImgCube imgs={emailyImgs}></ImgCube>
    </React.Fragment>
  );
};

export default ImgList;
