/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.solmuteoriaa.com`,
    title: `Solmuteoriaa - Unconventional Crochet`,
    description: `Free Crochet Patterns for cute plushies and unconventional ideas. Crochet to relax. Crochet to learn. Crochet to be awesome.`,
    twitterUsername: `@EskoPoutanen`,
    image: `/solmuteoriaa_og.jpg`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },*/
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/json/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/solmuteoriaa_logo_512.png',
      },
    },
  ],
}
