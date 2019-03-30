import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PageLayout from './PageLayout';

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___title] }
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                id
                frontmatter {
                  title
                  group
                  layout
                  status
                  path
                }
                html
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges: posts } }) => {
        return <PageLayout posts={posts}>{children}</PageLayout>;
      }}
    />
  );
};
