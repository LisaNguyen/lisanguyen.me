import React from "react";
import { Link } from "gatsby";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from "../components/layout";
import Home from "../components/home";
import Image from "../components/image";
import SEO from "../components/seo";

library.add(fab);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
