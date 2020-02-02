/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    const slug = node.frontmatter.slug;
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === '/') {
    page.context.layout = 'home';
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-scrollspy/,
            use: loaders.null(),
          },
          { test: /react-window/, use: loaders.null() },
        ],
      },
    });
  }
};

const fs = require('fs'); // native
const zlib = require('zlib'); // native
const path = require('path'); // native
const glob = require('glob'); // native

exports.onPostBuild = ({ pages, callback }) => {
  const publicPath = path.join(__dirname, 'public');
  const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css)`);
  gzippable.forEach(file => {
    try {
      const content = fs.readFileSync(file);
      const zipped = zlib.gzipSync(content);
      fs.writeFileSync(`${file}.gz`, zipped);
    } catch (err) {
      console.log(err); // eslint-disable
    }
  });
  // callback();
};
