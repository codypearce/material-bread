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
