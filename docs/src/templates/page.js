import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
