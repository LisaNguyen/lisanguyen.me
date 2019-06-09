import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import kanyeIpsum from '../images/kanye-ipsum.png';
import voila from '../images/voila.png';
import portfolio from '../images/portfolio.png';

const projects = [
  {
    name: 'Voila.css',
    description: 'Voila.css is a small but growing collection of quirky animations to pair with images and their corresponding text. This is the result of my experimentation with different CSS transitions.',
    link: 'https://lisanguyen.github.io/Voila.css/',
    image: voila
  }, {
    name: 'Portfolio',
    description: 'My digital home on the world wide web. Previously, I created my website in plain HTML, CSS and JavaScript but my latest re-design allowed me to try out Gatsby.js',
    link: 'http://www.lisanguyen.me/',
    image: portfolio
  }, {
    name: 'Kanye-Ipsum',
    description: 'Kanye-Ipsum is a lorem ipsum generator created during my journey to becoming a React.js developer. The design is inspired by his "Life of Pablo" album.',
    link: 'http://www.kanye-ipsum.com',
    image: kanyeIpsum
  }
];

const renderProjects = () => {
  return projects.map(({ name, description, link, image }) => (
    <div className="projects__list--item" key={name}>
      <h3 className="headline-3 projects__list--headline">{name}</h3>
      <a href={link} target="_blank">
        <img className="projects__list--image" src={image} alt="Kanye-Ipsum screenshot" />
      </a>
      <p className="paragraph-1 projects__list--paragraph">{description}</p>
    </div>
  ));
}

const ProjectsPage = () => (
    <Layout activeLink="projects">
        <SEO title="Projects" />
        <section className="projects">
          <div className="projects__summary">
            <h2 className="headline-2 projects__headline">
              Projects
            </h2>
            <q className="projects__quote">You learn more in failure than you ever do in success.</q>
            <p className="paragraph-1 projects__brief">
              From time to time, I'll set about to work on different projects to explore new styles and different technologies.
              Here, you'll find the results of my experimentation and exploration.
            </p>
          </div>
          <div className="projects__list">
            {renderProjects()}
          </div>
        </section>
    </Layout>
);

export default ProjectsPage;
