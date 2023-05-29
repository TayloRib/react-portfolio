import React from 'react';
import { Link } from "react-router-dom"

const ballerina = require('./assets/Ballerinas_in_Pink.jpg')
const dev = require('./assets/my_photo2.jpg')

export default function Home() {
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
            <tr>
                <td class="name" id="about"><h1>About Me</h1></td>
                <td class="margin"></td>
                <td><img class="edgar" src={dev} alt="the developer"></img></td>
                <td class="bio"><p>My name is Taylor and I am currently studying to become a professional Web Developer.</p>
                    <p>I love working with HTML and CSS to create beautiful, functional front end deploment pages. I am rapidly developing my skills with JavaScript and hope to deploy my own helpful functioning applications in the future.</p>
                </td>
            </tr>
        </table>
    
        <footer class="fixedfooter">
        
        <a href='https://github.com/TayloRib' target='_blank' rel="noreferrer"><i class="bi bi-github"></i></a>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-stack-overflow"></i>

        </footer>
        </main>
    </div>
  );
}
