import React from 'react'
import Layout from '../components/layout'
import NavSimple from '../components/NavSimple'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const AboutPage = () => (
  <Layout>
    <NavSimple />
    <h1>About</h1>
    <p>
      Saving sessions will only save on the current device (I'm using the
      browser's local storage).
    </p>
    <p>
      I wanted to plan the sessions I would attend at the{' '}
      <a rel="noopener" target="_blank" href="http://www.leaderex.com/">
        Leaderex
      </a>{' '}
      conference, but I didn't find the agenda on the website very user
      friendly. I wanted an easier way to plan my day without doing things
      manualy.
    </p>
    <p>
      This is just an experiment and a practice exercise for me; not trying to
      step on any toes. I hope my implementation hasn't made it worse.
    </p>
    <h3>Let me know if you like it</h3>
    <p>
      <OutboundLink
        rel="noopener"
        target="_blank"
        href="https://twitter.com/geoff4l"
      >
        @geoff
      </OutboundLink>{' '}
      on Twitter
    </p>
    <h3>
      *This was super quick so I'm sure there will be bugs and spelling
      mistakes, use at own risk
    </h3>
    <p>
      Code:{' '}
      <OutboundLink
        rel="noopener"
        target="_blank"
        href="https://github.com/runningdeveloper/leaderex"
      >
        Github
      </OutboundLink>
    </p>
    <p>*I am not associated with Leaderex in any way</p>

    <p>
      <OutboundLink
        rel="noopener"
        target="_blank"
        href="https://runningdeveloper.com"
      >
        See my website
      </OutboundLink>
    </p>
  </Layout>
)

export default AboutPage
