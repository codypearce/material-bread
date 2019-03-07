import React from 'react';
import { graphql } from 'gatsby';
import '../styles/templates/Page.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="Page">
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          color: 'rgba(0,0,0,.67)',
          marginBottom: 48,
          lineHeight: 1.6,
          fontSize: 16,
        }}>
        {post.frontmatter.description}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
