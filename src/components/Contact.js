// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../index.css";
import "../components/Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("moqzkple");
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
  return (
    <section className="contact-container">
      <div>
        <h2 className="contact-top-title">CONTACT ME</h2>
        <hr></hr>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input id="name" type="name" name="name" placeholder="Name" />
        <input id="email" type="email" name="email" placeholder="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
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
