import React from 'react';
import { Link } from "react-router-dom"

const ballerina = require('./assets/Ballerinas_in_Pink.jpg')

export default function Resume() {
  return (
    <>
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
                <h1>Resume</h1>
            </td>
            <td class="margin"></td>
            <td class="bio2"> 
                    <h4>Download my <a href='' download='./assets/TaylorsResume.txt'>Resume</a></h4>
                    <h3>Front End Proficiencies:</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    <h3>Back End Proficiencies:</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQl</li>
                        </ul>
                </td>
            </tr>
        </table>

        </main>
    </div>

    <div class="mobile">
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
                <h1>Resume</h1>
            </td>
            <td class="margin"></td>
            <td class="bio2"> 
                    <h4>Download my <a href='' download='./assets/TaylorsResume.txt'>Resume</a></h4>
                    <h3>Front End Proficiencies:</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    <h3>Back End Proficiencies:</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQl</li>
                        </ul>
                </td>
            </tr>
        </table>

        </main>
    </div>
    
        <footer>
        
        <a href='https://github.com/TayloRib' target='_blank' rel="noreferrer"><i class="bi bi-github"></i></a>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-stack-overflow"></i>

        </footer>
    </>
  );
}