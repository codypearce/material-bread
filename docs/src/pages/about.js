import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Image from '../components/image';

const About = ({ data }) => {
  console.log(data);
  const { markdownRemark } = data;
  const { title } = markdownRemark.frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark {
      id
      frontmatter {
        title
      }
      excerpt
      html
    }
  }
`;

export default About;
