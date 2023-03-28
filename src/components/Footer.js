import React from "react";
import "../index.css";
import "../components/Footer.css";
/* By importing the Footer.css file, it is added to the DOM whenever this component loads */

// Use rafce as shortcut to create React arrow export function

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <h2>Designed and Developed by Cheryl Barclay</h2>
        <h3>Copyright © 2023</h3>
        <section>
          <a href="https://github.com/CheBar1">
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="Github"
              className="icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/cheryl-barclay-531985252/">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a href="https://www.instagram.com/cheryl.k.barclay/">
            <img
              src="https://img.icons8.com/fluency/48/null/instagram-new.png"
              alt="Instagram"
              className="icon"
            />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
