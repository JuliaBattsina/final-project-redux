import React from "react";
import { useForm } from "@formspree/react";
import "./Contact.styles.css";

function Support() {
  const [state, handleSubmit] = useForm("xvoelerv");

  if (state.succeeded) {
    return (
      <div>
        <button>Thank you</button>
      </div>
    );
  }

  return (
    <div className="form-overlay">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" type="text" name="last_name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" name="phone" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Support;
