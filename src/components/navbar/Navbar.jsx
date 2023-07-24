import "./navbar.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { AiOutlineAlignRight, AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState();
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="navbar-links">
        <ul>
          <li className={activeLink === "home" && "active"}>
            <a onClick={() => handleLinkClick("home")} href="#home">
              Home
            </a>
          </li>
          <li className={activeLink === "explore" && "active"}>
            <a onClick={() => handleLinkClick("explore")} href="#explore">
              Explore
            </a>
          </li>
          <li className={activeLink === "about" && "active"}>
            <a onClick={() => handleLinkClick("about")} href="#about">
              About us
            </a>
          </li>
          <li className={activeLink === "contact" && "active"}>
            <a onClick={() => handleLinkClick("contact")} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-sign">
        <p>Join us</p>
      </div>

      <div className="navbar-menu">
        {toggle ? (
          <AiFillCloseCircle
            color="#fff"
            size={30}
            onClick={() => setToggle(false)}
          />
        ) : (
          <AiOutlineAlignRight
            color="#fff"
            size={30}
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <div className="navbar-menu-container">
            <ul className="navbar-menu-links">
              <li className="active">
                <p href="#home" className="active">
                  Home
                </p>
              </li>
              <li>
                <p href="#explore">Explore</p>
              </li>
              <li>
                <p href="#about">About us</p>
              </li>
              <li>
                <p href="#contact">Contact</p>
              </li>
            </ul>
            <div className="navbar-menu-sign">
              <p>Join us</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
