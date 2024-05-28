
import React, { useState } from "react";
import Image25 from '../../images/image25.jpg';
import Support from "./Support";
import "./Contact.styles.css";

function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleSupportClick = () => {
    setShowForm(true);
  };

  return (
    <div className='App'>
      <div className='images-container'>
        <img src={Image25} alt="starts" />
        <div className='overlas-text'>
          <p>Contact Us</p>
          <h2>Leave your contact details and we will get back to you</h2>
          <button onClick={handleSupportClick}>Push</button>
          {showForm && <Support />}
        </div>
      </div>
    </div>
  );
}

export default Contact;