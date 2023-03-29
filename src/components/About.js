import React from "react";
import AboutProfilePic from "../assets/aboutPic.png";
import "../index.css";
import "../components/About.css";
/* By importing the Footer.css file, it is added to the DOM whenever this component loads */

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.

const About = () => {
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <section className="about-container">
      <h2 className="about-title">Hi! I'm Cheryl - your next web developer!</h2>

      <img
        className="about-img"
        id="aboutProfilePic"
        src={AboutProfilePic}
        alt="Cheryl Barclay"
      />

      <p className="about-p">
        My career began as a professional musician, with a love of numbers and patterns, who later found a new passion in web development.
       <br></br>
        I'm a compassionate, fun and friendly person who is honest and punctual.
        <br></br>
        I work well in a team but also on my own, as I like to set myself goals which I will achieve. I have excellent communication, attention to detail and problem-solving skills.
        <br></br>
        I have a creative mind and am always up for new challenges.</p>
    </section>
  );
};

export default About;
