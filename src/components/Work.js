import React from 'react';
import { Link } from "react-router-dom"

const ballerina = require('./assets/Ballerinas_in_Pink.jpg')
const meso = require('./assets/mesoamerican_museum.jpg')
const word = require('./assets/word_calendar2.png')
const weather = require('./assets/weather_dashboard.jpg')
const pokemon = require('./assets/pokemon_guide.jpg')
const orchestra = require('./assets/The_Orchestra.jpg')

export default function Work() {
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
            <td class="name" id="work"><h1>Work</h1></td>
            <td class="margin"></td>
            <td class="bio2"> 
            <a target="_blank" rel="noreferrer" href="https://github.com/TayloRib/mesoamerican-museum" alt="the devs mesoamerican museum landing page">
                <img class="dance" src={meso}></img></a>
                <div class="subtitle3">
                    <h3>Mesoamerican Museum</h3>
                    <p><i>May - 2023</i></p>
                </div>
            </td>
        </tr>
        <tr>
            <td class="name"></td>
            <td class="margin"></td>
            <td>
                <table class="table3">
                    <tr class="help">
                        <td class="bio2"><a target="_blank" rel="noreferrer" href="https://amman98.github.io/Random-Word-Calendar/" alt="dark mode view of the devs calendar app"><img class="twopic" src={word}></img></a>
                            <div class="subtitle3">
                                <h3>Word Calendar</h3>
                                <p><i>April - 2023</i></p>
                            </div>
                        </td>
                        <td class="spacer"></td>
                        <td><a target="_blank" rel="noreferrer" href="https://github.com/TayloRib/weather-dashboard" alt="homepage of the devs weather app"><img class="twopic2" src={weather}></img></a> 
                            <div class="subtitle3">
                                <h3>Weather Dashboard</h3>
                                <p><i>April - 2023</i></p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="name"></td>
            <td class="margin"></td>
            <td>
                <table class="table3">
                    <tr class="help">
                        <td class="bio2"><a target="_blank" rel="noreferrer" href="https://github.com/TayloRib/gen9raidguidejo"><img class="twopic" src={pokemon}></img></a>
                            <div class="subtitle3">
                                <h3>Pokemon Guide</h3>
                                <p><i>February - 2023</i></p>
                            </div>
                        </td>
                        <td class="spacer"></td>
                        <td class="bio2"><a target="_blank" href="https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_The_Orchestra_at_the_Opera_-_Google_Art_Project_2.jpg"><img class="twopic" src={orchestra}></img></a>
                            <div class="subtitle3">
                                <h3>Opera and Orchestra</h3>
                                <p><i>Degas - 1870</i></p>
                            </div>
                        </td>
                    </tr>
                </table>
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
            <tr>
                <td class="name" id="work2"><h1>Work</h1></td>
                <td class="margin"></td>
                <td class="bio2"> 
                <a target="_blank" rel="noreferrer" href="https://github.com/TayloRib/mesoamerican-museum" alt="the devs mesoamerican museum landing page">
                    <img class="twopic" src={meso} /></a>
                    <div class="subtitle2">
                        <h3>Mesoamerican Museum - <i>2023</i></h3>
                    </div>
                </td>
            </tr>
            <tr class="spacer">
                <td class="name"></td>
                <td class="margin"></td>
                <td></td>
            </tr>
            <tr>
                <td class="name" id="work"></td>
                <td class="margin"></td>
                <td class="bio2">
                    <a target="_blank" rel="noreferrer" href="https://amman98.github.io/Random-Word-Calendar/" alt="dark mode view of the devs calendar app">
                        <img class="twopic" src={word} /></a>
                        <div class="subtitle2">
                            <h3>Word Calendar - <i>2023</i></h3>
                    </div>
                </td>
            </tr>
            <tr class="spacer">
                <td class="name"></td>
                <td class="margin"></td>
                <td></td>
            </tr>
            <tr>
                <td class="name"></td>
                <td class="margin"></td>
                <td><a target="_blank" rel="noreferrer" href="https://github.com/TayloRib/weather-dashboard" alt="homepage of the devs weather app">
                    <img class="twopic2" src={weather} /></a> 
                    <div class="subtitle2">
                        <h3>Weather Dashboard - <i>2023</i></h3>
                    </div>
                </td>
            </tr>
            <tr class="spacer">
                <td class="name"></td>
                <td class="margin"></td>
                <td></td>
            </tr>
            <tr>
                <td class="name"></td>
                <td class="margin"></td>
                <td class="bio2">
                    <a target="_blank" rel="noreferrer" href="https://github.com/TayloRib/gen9raidguidejo">
                        <img class="twopic" src={pokemon} /></a>
                        <div class="subtitle2">
                            <h3>Pokemon Guide - <i>2023</i></h3>
                        </div>
                </td>
            </tr>
            <tr class="spacer">
                <td class="name"></td>
                <td class="margin"></td>
                <td></td>
            </tr>
            <tr>
                <td class="name"></td>
                <td class="margin"></td>
                <td class="bio2">
                    <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_The_Orchestra_at_the_Opera_-_Google_Art_Project_2.jpg">
                    <img class="twopic2" src={orchestra} /></a>
                    <div class="subtitle2" >
                        <h3>Opera and Orchestra - <i>2023</i></h3>
                    </div>
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