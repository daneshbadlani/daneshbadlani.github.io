import React from 'react';
import './App.css';
import daneshPhoto from './images/danesh-photo.jpg';
import iconX from './images/icon-x.png';
import iconLinkedin from './images/icon-linkedin.png';
import iconGithub from './images/icon-github.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Danesh Kumar Badlani</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Blog</a>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="intro">
            <h2>Hi, I am Danesh!</h2>
            <p className="subtitle">Builder, Entrepreneur, and Investor</p>
            <ul className="details">
              <li>I am a tinkerer and life-long learner.</li>
              <li>I have worked at a bunch of startups as well as at Microsoft.</li>
              <li>I invest in teams and ventures that create value for people.</li>
            </ul>
            <a href="#" className="button">Read my Blog</a>
          </div>
          <div className="profile-picture">
            <img src={daneshPhoto} alt="Danesh Kumar Badlani" />
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://www.x.com/daneshbadlani"><img src={iconX} alt="X" /></a>
            <a href="https://www.linkedin.com/in/daneshbadlani"><img src={iconLinkedin} alt="LinkedIn" /></a>
            <a href="https://www.github.com/daneshbadlani"><img src={iconGithub} alt="GitHub" /></a>
          </div>
          <p>© 2024 Danesh Badlani</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
