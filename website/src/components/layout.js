/* global tw */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'react-emotion'

const Container = styled('div')`
  ${tw('container mx-auto max-w-md font-sans')};
`
const Heading = styled('h1')`
  ${tw('font-sans')};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
          >
          <meta property="og:type" content="website" />
          <meta property="description" content={data.site.siteMetadata.description} />
          <meta property="og:url" content={`https://runningdeveloper.github.io/leaderex/`} />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta property="og:image" content={`https://runningdeveloper.github.io/leaderex/icons/icon-144x144.png`} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@geoff4l" />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta name="twitter:description" content={data.site.siteMetadata.description} />
          <meta name="twitter:image" content={`https://runningdeveloper.github.io/leaderex/icons/icon-144x144.png`} />
        </Helmet>
        <Container>
          <Heading>{data.site.siteMetadata.title}</Heading>
          <div>{children}</div>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
