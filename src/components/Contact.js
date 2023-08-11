import React, { useState } from 'react';
// import './style.css'; //TODO: eventually uncomment this

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [contactName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    }
    else if (inputType === 'contactName') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!contactName) {
      setErrorMessage('Full name is required!');
      return;
    }
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    else if (!message) {
      setErrorMessage('Message text required!');
      return;      
    } else {
      //TODO: This is where the email with message and full name will actually be sent out to me.
      alert(`Hello ${contactName}, your message has been sent and we will reply back to you at ${email} ASAP!`);
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
      <div id="contact" style={{ height: "100vh", position: "relative" }}>
        <h1>Please fill out a form to contact me!</h1>
        <form className="form">
          <div style={{ paddingBottom: "5px"}}>
            <input
              value={contactName}
              name="contactName"
              onChange={handleInputChange}
              type="text"
              placeholder="Full name here"
            />
          </div>
          <div style={{ paddingBottom: "5px"}}>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email address here"
            />
          </div>
          <div>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Message text here"
              rows="12"
              cols="60"
            />
          </div>
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
  );
}

export default Contact;
