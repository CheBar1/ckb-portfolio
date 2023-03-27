import React from "react";
import AboutProfilePic from "../assets/aboutProfilePic.png";
import "../index.css";

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.

const About = () => {
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <section className="container">
      <h2 class="top-title">Hi! I'm Cheryl - your next web developer!</h2>
      <hr></hr>
      <div>
        <img
          class="mb-5"
          id="aboutProfilePic"
          src={AboutProfilePic}
          alt="Cheryl Barclay"
        />

        <p>
        My career began as a professional musician, with a love of numbers and patterns, who later found a new passion in web development.</p>
        <p>
        I'm a compassionate, fun and friendly person who is honest and punctual. I work well in a team but also on my own, as I like to set myself goals which I will achieve.
        I have excellent communication, attention to detail and problem-solving skills. 
        </p>
      
        <p>
        I have a creative mind and am always up for new challenges.
        </p>
      </div>
    </section>
  );
};

export default About;