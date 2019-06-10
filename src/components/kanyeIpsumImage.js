import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const KanyeIpsumImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "kanye-ipsum.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="projects__list--image" />}
  />
);
export default KanyeIpsumImage;
