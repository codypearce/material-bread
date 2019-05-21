module.exports = {
  siteMetadata: {
    title: `Material Bread | React Material Design Components`,
    description: `Highly Customizable React Native Material Design Components`,
    author: `codypearce`,
    favicon: 'src/assets/favicon.ico',
    legacy: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': `${__dirname}/src/components`,
          '@content': `${__dirname}/src/content`,
          '@utils': `${__dirname}/src/utils`,
        },
        extensions: [],
      },
    },
    `gatsby-plugin-react-native-web`,
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`react-native-vector-icons`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        favicon: 'src/assets/favicon.ico',
        legacy: false,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/PageLayout`),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-72995758-2',
      },
    },
  ],
};
