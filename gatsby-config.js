module.exports = {
  siteMetadata: {
    title: 'Rubberduck',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-plugin-catch-links'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`,
          `open sans`,
          `raleway`,
          `fira mono`,
          `roboto mono`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
  ],
};
