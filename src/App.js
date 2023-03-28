import React, { useState } from "react";
import './index.css';
// The components need to be imported from the components folder to the App.js file
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  // This method is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    // if (currentPage === "Portfolio") {
    //   return <Portfolio />;
    // }
    // if (currentPage === "Resume") {
    //   return <Resume />;
    // }
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="app-container">
      {/* Passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
