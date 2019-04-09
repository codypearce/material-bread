/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//   }
// };

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               layout
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       if (node.frontmatter.layout == 'page') {
//         createPage({
//           path: node.frontmatter.path,
//           component: path.resolve(`./src/templates/page.js`),
//           context: {
//             slug: node.fields.slug,
//           },
//         });
//       } else if (node.frontmatter.layout == 'component') {
//         createPage({
//           path: node.frontmatter.path,
//           component: path.resolve(`./src/templates/component.js`),
//           context: {
//             slug: node.fields.slug,
//           },
//         });
//       }
//     });
//   });
// };

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
