module.exports = {
  siteMetadata: {
    title: `Jim & Meagan`,
    description: `Our adventure beings in 2021`,
    author: `@jim_hill_r`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `tangerine`
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jim & Meagan`,
        short_name: `J&M Wedding`,
        start_url: `/`,
        background_color: `#99a5b1`,
        theme_color: `#99a5b1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ],
}
