const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: 'Leaderex Agenda (Unofficial)',
    description: 'Unofficial version of the Leaderex agenda, I just wanted an easier way to plan my day. Its a bit rough but I think does what I wanted. Built by runningdeveloper.com'
  },
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
