;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    157: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(164),
        o = n(168)
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(o.a, null),
          r.a.createElement('h1', null, 'About'),
          r.a.createElement(
            'p',
            null,
            "Saving sessions will only save on the current device (using the browser's local storage)."
          ),
          r.a.createElement(
            'p',
            null,
            "I wanted to plan the sessions I would attend at the Leaderex conference, but I didn't find the agenda on the website user friendly."
          ),
          r.a.createElement(
            'p',
            null,
            "Just wanted an easier way to plan my day without doing things manualy. Also this is just a practice exercise for me, not trying to step on toes. Hope I didn't make it worse."
          ),
          r.a.createElement('h3', null, 'Let me know if you like it'),
          r.a.createElement(
            'p',
            null,
            r.a.createElement(
              'a',
              {
                rel: 'noopener',
                target: '_blank',
                href: 'https://twitter.com/geoff4l',
              },
              '@geoff'
            ),
            ' on Twitter'
          ),
          r.a.createElement(
            'h3',
            null,
            "*This was super quick so I'm sure there will be bugs and spelling mistakes, use at own risk"
          ),
          r.a.createElement(
            'p',
            null,
            'Code: ',
            r.a.createElement(
              'a',
              {
                rel: 'noopener',
                target: '_blank',
                href: 'https://github.com/runningdeveloper/leaderex',
              },
              'Github'
            )
          ),
          r.a.createElement(
            'p',
            null,
            '*I am not associated with Leaderex in any way'
          ),
          r.a.createElement(
            'p',
            null,
            r.a.createElement(
              'a',
              {
                rel: 'noopener',
                target: '_blank',
                href: 'https://runningdeveloper.com',
              },
              'See my website'
            )
          )
        )
      }
    },
    161: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return f
        }),
        n.d(t, 'StaticQueryContext', function() {
          return p
        }),
        n.d(t, 'StaticQuery', function() {
          return g
        })
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        l = n(160),
        u = n.n(l)
      n.d(t, 'Link', function() {
        return u.a
      }),
        n.d(t, 'withPrefix', function() {
          return l.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return l.navigate
        }),
        n.d(t, 'push', function() {
          return l.push
        }),
        n.d(t, 'replace', function() {
          return l.replace
        }),
        n.d(t, 'navigateTo', function() {
          return l.navigateTo
        })
      var s = n(50)
      n.d(t, 'waitForRouteChange', function() {
        return s.a
      })
      var c = n(162),
        d = n.n(c)
      n.d(t, 'PageRenderer', function() {
        return d.a
      })
      var m = n(33)
      n.d(t, 'parsePath', function() {
        return m.a
      })
      var p = r.a.createContext({}),
        g = function(e) {
          return r.a.createElement(p.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      g.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    162: function(e, t, n) {
      var a
      e.exports = ((a = n(166)) && a.default) || a
    },
    164: function(e, t, n) {
      'use strict'
      var a = n(165),
        r = n(0),
        i = n.n(r),
        o = n(8),
        l = n.n(o),
        u = n(167),
        s = n.n(u),
        c = n(161),
        d = n(163),
        m = Object(d.a)('div', { target: 'e1qsw1o60' })(
          {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            maxWidth: '40rem',
            fontFamily:
              'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
          },
          ';'
        ),
        p = Object(d.a)('h1', { target: 'e1qsw1o61' })(
          {
            fontFamily:
              'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
          },
          ';'
        ),
        g = function(e) {
          var t = e.children
          return i.a.createElement(c.StaticQuery, {
            query: '2328579951',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(s.a, {
                  title: e.site.siteMetadata.title,
                  htmlAttributes: { lang: 'en' },
                  meta: [
                    {
                      name: 'description',
                      content: e.site.siteMetadata.description,
                    },
                  ],
                }),
                i.a.createElement(
                  m,
                  null,
                  i.a.createElement(p, null, e.site.siteMetadata.title),
                  i.a.createElement('div', null, t)
                )
              )
            },
            data: a,
          })
        }
      ;(g.propTypes = { children: l.a.node.isRequired }), (t.a = g)
    },
    165: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Leaderex Agenda (Unofficial)',
              description:
                "Unofficial version of the Leaderex agenda, I just wanted an easier way to plan my day. It's a bit rough but I think it does what I wanted. Built by runningdeveloper.com",
            },
          },
        },
      }
    },
    166: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        l = n(35),
        u = n(1),
        s = function(e) {
          var t = e.location,
            n = u.a.getResourcesForPathname(t.pathname)
          return r.a.createElement(l.a, { location: t, pageResources: n })
        }
      ;(s.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = s)
    },
    168: function(e, t, n) {
      'use strict'
      var a = n(0),
        r = n.n(a),
        i = n(163),
        o = n(161),
        l = Object(i.a)(o.Link, { target: 'e1lc2hem0' })(
          {
            marginRight: '.5rem',
            textAlign: 'center',
            display: 'block',
            borderWidth: '1px',
            borderColor: '#3490dc',
            borderRadius: '.25rem',
            paddingTop: '.5rem',
            paddingBottom: '.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            backgroundColor: '#3490dc',
            color: '#fff',
            textDecoration: 'none',
            ':hover': { backgroundColor: '#2779bd' },
          },
          ';'
        ),
        u = Object(i.a)('nav', { target: 'e1lc2hem1' })(
          { display: 'flex', marginTop: '.5rem', marginBottom: '.5rem' },
          ';'
        )
      t.a = function() {
        return r.a.createElement(
          u,
          null,
          r.a.createElement(l, { to: '/' }, 'Home'),
          r.a.createElement(l, { to: '/about/' }, 'About')
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-about-js-eef0464fafbc70a6e323.js.map
