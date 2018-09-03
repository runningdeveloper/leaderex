import React from 'react'
import Layout from '../components/layout'
import NavSimple from '../components/NavSimple'

const AboutPage = () => (
  <Layout>
    <NavSimple/>
    <h1>About</h1>
    <p>Saving sessions will only save on the current device (using the browser's local storage).</p>
    <p>I wanted to plan the sessions I would attend at the Leaderex conference, but I didn't find the agenda on the website user friendly.</p>
    <p>Just wanted an easier way to plan my day without doing things manualy. Also this is just a practice exercise for me, not trying to step on toes. Hope I didn't make it worse.</p>
    <h3>Let me know if you like it</h3>
    <p><a rel="noopener" target="_blank" href="https://twitter.com/geoff4l">@geoff</a> on Twitter</p>
    <h3>*This was super quick so I'm sure there will be bugs and spelling mistakes, use at own risk</h3>
    <p>Code: <a rel="noopener" target="_blank" href="https://github.com/runningdeveloper/leaderex">Github</a></p>
    <p>*I am not associated with Leaderex in any way</p>

    <p><a rel="noopener" target="_blank" href="https://runningdeveloper.com">See my website</a></p>
  </Layout>
)

export default AboutPage
