const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: 'Leaderex Agenda (Unofficial)',
    description:
      "Unofficial version of the Leaderex agenda, I just wanted an easier way to plan my day. It's a bit rough but I think it does what I wanted. Built by runningdeveloper.com",
  },
  pathPrefix: `/leaderex`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src/data`),
      },
    },
    `gatsby-transformer-json`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#0E0B92',
        theme_color: '#0E0B92',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-125051348-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
  ],
}
