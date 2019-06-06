import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import developer from '../images/developer.svg';

const Home = () => (
    <div className="home__content">
        <div className="home__text-container">
          <h1 className="headline-1">
            Hi, I'm Lisa Nguyen.<br />
            A Frontend Developer.
          </h1>
          <p className="paragraph-1 home__paragraph">
            Nice of you to drop by, yes you right there. Welcome to my digital home on the web where you can read about who I am and what I do for a living or take a peek at the side projects I'm currently working on. If you'd like to connect, you can catch me on Twitter, LinkedIn or GitHub.
          </p>
          <div className="home__icons">
            <a className="home__icon" href="https://twitter.com/LisaNguyen505">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="3x"/>
            </a>
            <a className="home__icon" href="https://ie.linkedin.com/in/lisa-nguyen-514725a5">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
            </a>
            <a className="home__icon" href="https://github.com/LisaNguyen">
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </a>
          </div>
        </div>
        <div className="home__image-container">
          <img src={developer} alt="Developer" />
        </div>
      </div>
);

export default Home;