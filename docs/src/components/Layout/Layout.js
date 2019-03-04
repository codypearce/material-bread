import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PageLayout from "./PageLayout"

require("prismjs/themes/prism.css")

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
                  description
                  status
                  path
                  layout
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges: posts } }) => (
        <PageLayout posts={posts}>{children}</PageLayout>
      )}
    />
  )
}
