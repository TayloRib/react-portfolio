import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { validateEmail } from '../utils/helpers';

const ballerina = require('./assets/Ballerinas_in_Pink.jpg')

export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and message
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'userName') {
          setUserName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit
        e.preventDefault();
    
        // We check to see if the email is not valid if not we set an error message to be displayed on the page.
        if (!validateEmail(email) ) {
          setErrorMessage('Email is invalid');
          return;
        }
        if (!userName || !message ) {
            setErrorMessage('Please fill out all fields');
            return;
          }
    
        // clear out the input after a successful submit.
        setUserName('');
        setEmail('');
        setMessage('');
      };

  return (
    <div class="desktop">
    <main>
    
        <header>
            <h1 class="name">Taylor Orsini</h1>
        </header>
    
        <nav>
            <Link to="/">Home</Link>
            <Link to="/work">Works</Link>
            <Link to="/contact">Contact Me</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    
        <div class="headerbox">
            <img class="ballerina" src={ballerina} alt="Edgar Degas painting, Ballerinas in Pink"></img>
            <h2 class="subtitle">React Porfolio</h2>
        </div>
    
        <table class="table1">
        <tr class="help">
            <td class="name" id="work">
                <h1>Contact</h1>
                <h1>Me</h1>
            </td>
            <td class="margin"></td>
            <td class="bio2"> 
                    <form class="contactform form">
                        <label class="label" for="userName">Name:</label>
                        <input 
                        value={userName} 
                        class="name" 
                        type="text" 
                        placeholder='Your Name' 
                        name="userName"
                        onChange={handleInputChange}>
                        </input>
                        <label class="label" for="email">Email Address:</label>
                        <input 
                        value={email} 
                        class="name" 
                        type="email" 
                        placeholder='Your Email' 
                        name="email"
                        onChange={handleInputChange}>
                        </input>
                        <label value={message} class="label" for="message">Leave a Message:</label>
                        <textarea 
                        value={message}
                        class="message" 
                        name="message" 
                        placeholder='Cool Portfolio!'
                        onChange={handleInputChange}>
                        </textarea>
                        {errorMessage && (
                        <p className="error-text">{errorMessage}</p>
                        )}
                        <button class="send" type="button" onClick={handleFormSubmit}>Send</button>
                    </form>
                    
                </td>
            </tr>
        </table>
    
        <footer>
        
        <a href='https://github.com/TayloRib' target='_blank' rel="noreferrer"><i class="bi bi-github"></i></a>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-stack-overflow"></i>

        </footer>
        </main>
    </div>
  );
}