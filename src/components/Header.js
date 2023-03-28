import React from "react";
import Navigation from "./Navigation";
import "../index.css";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="header-container">
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
    </div>
  );
};

export default Header;
