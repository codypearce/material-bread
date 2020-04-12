import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/blog/Layout';
import SEO from '../components/blog/seo';
import Img from 'gatsby-image';

class BlogPostTemplate extends React.Component {
  render() {
    const data = this.props.data;
    const post = data && data.markdownRemark;
    const siteTitle = data && data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    // const thumbnail = post.frontmatter && post.frontmatter.thumbnail;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          // thumbnail={post.frontmatter.thumbnail}
        />
        <article style={{ maxWidth: 780, margin: '20px auto', padding: 16 }}>
          <header style={{ marginBottom: 50 }}>
            {/* {thumbnail ? (
              <Img
                sizes={thumbnail.childImageSharp.sizes}
                style={{ borderRadius: 10, maxHeight: 350 }}
              />
            ) : null} */}
            <h1
              style={{
                marginBottom: 0,
                fontWeight: 900,
                fontSize: 54,
                textAlign: 'center',
              }}>
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                display: `block`,
                fontSize: 16,
                textAlign: 'center',
              }}>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: 12,
            }}
          />
        </article>

        <nav style={{ maxWidth: 780, margin: '0 auto' }}>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
