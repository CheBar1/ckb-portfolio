// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from "../utils/helpers";
import "../index.css";
import "../components/Contact.css";
// require('dotenv').config()

function Contact() {
  // Please don't copy "moqzkple" into your own code as it will send an eamil to me via formspree - visit formspree as per above link, create your own free form that can be attached to your own email :-)
  const [state, handleSubmit] = useForm("moqzkple");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  if (state.succeeded) {
    return (
      <div className="form-submit-message">
        <p>Thank you for contacting me</p>
        <img
          src="https://img.icons8.com/emoji/96/null/slightly-smiling-face.png"
          alt="smiley-face emoji"
        />
        <p>I will respond as soon as possible</p>
      </div>
    );
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact-container">
      <div>
        <h2 className="contact-top-title">CONTACT ME</h2>
        <hr></hr>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={email}
            onBlur={handleChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="field">
          <textarea
            className="textarea"
            name="message"
            placeholder="Message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="contact-button"
          type="submit"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
