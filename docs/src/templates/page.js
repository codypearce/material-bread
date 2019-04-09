import React from 'react';
import '../styles/templates/Page.css';

export default ({ data }) => {
  if (!data) return null;
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
