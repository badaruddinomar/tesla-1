import { useState } from "react";
import "./header.css";
import logo from "./../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const burgerActiveHandler = () => {
    setBurgerActive(true);
  };
  const burgerCloseHandler = () => {
    setBurgerActive(false);
  };
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <menu>
          <p>
            <a href="#model-s">Model-S</a>
          </p>
          <p>
            <a href="#model-x">Model-X</a>
          </p>
          <p>
            <a href="#model-y">Model-Y</a>
          </p>
          <p>
            <a href="#model-3">Model-3</a>
          </p>
        </menu>
        <div className="right-menu">
          <a href="/">Shop</a>
          <a href="/">Tesla Account</a>
          <div className="burger">
            <MenuIcon className="menu-icon" onClick={burgerActiveHandler} />
          </div>
        </div>
      </nav>
      {burgerActive && (
        <>
          <Fade right>
            <div className="burger-menu">
              <div className="icon-div">
                <ClearIcon
                  className="clear-icon"
                  onClick={burgerCloseHandler}
                />
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="#model-s">Model-S</a>
                  </li>
                  <li>
                    <a href="#model-x">Model-X</a>
                  </li>
                  <li>
                    <a href="#model-y">Model-Y</a>
                  </li>
                  <li>
                    <a href="#model-3">Model-3</a>
                  </li>
                  <li>
                    <a href="/">Existing Invertory</a>
                  </li>
                  <li>
                    <a href="/">Used Invertory</a>
                  </li>
                  <li>
                    <a href="/">Trade-in</a>
                  </li>
                  <li>
                    <a href="/">Cybertruck</a>
                  </li>
                  <li>
                    <a href="/">Roadsster</a>
                  </li>
                  <li>
                    <a href="/">Shop</a>
                  </li>
                  <li>
                    <a href="/">Tesla Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
};

export default Header;
