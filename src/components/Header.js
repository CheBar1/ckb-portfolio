import React from "react";
import Navigation from "./Navigation";
import "../index.css";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <container className="header-container">
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
    </container>
  );
};

export default Header;
