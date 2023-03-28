import React, { useState, useEffect } from "react";
import "../index.css";
import "../components/Navigation.css";
/* By importing the Navigation.css file, it is added to the DOM whenever this component loads */

const Navigation = ({ currentPage, handlePageChange }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="header">
        <h1 className="navtitle">Cheryl Barclay</h1>
        <nav className="navbar">
          {(toggleMenu || screenWidth > 780) && (
            <ul className="navtabs">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
          <button onClick={toggleNav} className="btn">
            {" "}
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
