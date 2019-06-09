import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const AboutLinks = () => (
    <div className="about__links">
        <div className="about__links--icons">
            <FontAwesomeIcon icon={faFile} /> <br />
            <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="about__links--values">
            <span>Check out my
                <a href="./LisaNguyenCV.pdf" target="_blank">
                    <strong> resume</strong>
                </a>
            </span>
            <br />
            <span>Reach me at
                <a href="mailto: hello@lisanguyen.me">
                    <strong> hello@lisanguyen.me</strong>
                </a>
            </span>
        </div>
    </div>
);

export default AboutLinks;
