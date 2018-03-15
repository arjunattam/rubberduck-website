module.exports = {
  siteMetadata: {
    title: 'Rubberduck',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cabin`,
          `lato`,
          `work sans`,
          `montserrat`,
          `raleway`,
          `quicksand`,
          `rubik`,

          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
  ],
}
