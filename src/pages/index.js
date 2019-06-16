import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from "../components/layout";
import Home from "../components/home";
import SEO from "../components/seo";

library.add(fab);

const IndexPage = () => (
  <Layout activeLink="home">
    <SEO title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
