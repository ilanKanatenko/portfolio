// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Middle from "./components/middle/middle";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio";
import ContactPage from "./components/contactPage/contactPage";
import { authenticateUser, isAuth } from "./store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "./styles/globalText.css";
import "./styles/Container.css";
import "./styles/Section.css";
import "./styles/Body.css";

const App = () => {
  const dispatch = useDispatch();
  dispatch(isAuth());

  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <React.Fragment>
              <Header />
              <Middle />
            </React.Fragment>
          )}
        ></Route>
        <Route path="/projects" component={Portfolio}></Route>
        <Route path="/contact" component={ContactPage}></Route>
      </Switch>
      <Route path="/" component={Footer}></Route>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <a className="App-link" href="/auth/google">
    //       login with google
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
