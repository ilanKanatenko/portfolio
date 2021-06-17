import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import * as classes from "./navBar.module.css";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";

const NavBar = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    // <Navbar variant="dark">
    //   <Navbar.Brand>
    //     <img
    //       src={logo}
    //       className={classes.logo}
    //       alt="portfolio logo"
    //       useMap="#Map"
    //     />
    //     <map name="Map" id="Map">
    //       <area
    //         href="/asd"
    //         shape="rect"
    //         // class="brick 1"
    //         coords="29,13,231,50"
    //       />
    //     </map>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <React.Fragment>
      <Navbar
        className={classes.NavBar + " pl-5 pr-5"}
        variant="light"
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand>
          <NavLink className={classes.NavLink} to="/">
            <Image src={logo} className={classes.logo} alt="portfolio logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className={classes.NavLink} to="/projects">
              Projects
            </NavLink>
            <NavLink className={classes.NavLink} to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Nav>
            {isAuth ? (
              <Nav.Link>
                <NavLink className={classes.NavLink} to="/api/logout">
                  <button
                    className={
                      classes.loginBtn + " " + classes["loginBtn--google"]
                    }
                  >
                    Logout
                  </button>
                </NavLink>
              </Nav.Link>
            ) : (
              <Nav.Link href="/auth/google">
                <button
                  className={
                    classes.loginBtn + " " + classes["loginBtn--google"]
                  }
                >
                  Login with Google
                </button>{" "}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
