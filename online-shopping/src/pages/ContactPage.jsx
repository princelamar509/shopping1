
import React from 'react';
import '../styles/App.css';


const ContactPage = () => {
  return (
    <div>
      <div className="contact-page">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    
    </div>
  );
};

export default ContactPage;
