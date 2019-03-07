import React from 'react';
import { graphql } from 'gatsby';
import Prism from 'prismjs';

export default ({ data }) => {
  setTimeout(() => Prism.highlightAll(), 100);
  const post = data.markdownRemark;
  const { title, description, materialDocsLink } = post.frontmatter;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <a href={materialDocsLink}>Material Docs</a>
      </div>
      <pre
        style={{
          padding: 12,
        }}>
        <code
          className="language-javascript"
          style={{
            width: 'auto',
            fontSize: 14,
          }}>{`import { appbar } from 'material-bread';`}</code>
      </pre>
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
      }
    }
  }
`;
