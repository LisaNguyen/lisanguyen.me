import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutLinks from '../components/aboutLinks';

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <section className="about">
            <div className="about__image"></div>
            <div className="about__content">
                <div className="about__content--container">
                    <h2 className="secondary-title about__content--header">A short & sweet biography</h2>
                    <div className="about__content--text">
                        <p className="paragraph about__content--paragraph">
                        Lisa is a frontend developer currently working for Verizon Media in somewhat sunnyside Dublin (that's a lie, we see the sun maybe twice a year if we're lucky).
                She works on the user interface for the ad campaign management tools known as The Store where she spends her days drinking macchiato's, implementing new features as well as enhancing existing components.
                        </p>
                        <p className="paragraph about__content--paragraph">
                        In her spare time, you'll find her with her trusted sidekick - a Chihuahua-mixed breed named Chewie. Chewie enjoys hiking so Lisa has been forced to take it up as a hobby. Together they have conquered the Sugarloaf, climbed Bray Head and trekked their way through Glendalough.
                        </p>
                    </div>
                    <AboutLinks />
                </div>
            </div>
        </section>
    </Layout>
);

export default AboutPage;