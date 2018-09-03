;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    156: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(164),
        o = a(168)
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(o.a, null),
          r.a.createElement('h1', null, 'NOT FOUND'),
          r.a.createElement(
            'p',
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        )
      }
    },
    161: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return g
        }),
        a.d(t, 'StaticQueryContext', function() {
          return p
        }),
        a.d(t, 'StaticQuery', function() {
          return f
        })
      var n = a(0),
        r = a.n(n),
        i = a(8),
        o = a.n(i),
        u = a(160),
        c = a.n(u)
      a.d(t, 'Link', function() {
        return c.a
      }),
        a.d(t, 'withPrefix', function() {
          return u.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return u.navigate
        }),
        a.d(t, 'push', function() {
          return u.push
        }),
        a.d(t, 'replace', function() {
          return u.replace
        }),
        a.d(t, 'navigateTo', function() {
          return u.navigateTo
        })
      var l = a(50)
      a.d(t, 'waitForRouteChange', function() {
        return l.a
      })
      var s = a(162),
        d = a.n(s)
      a.d(t, 'PageRenderer', function() {
        return d.a
      })
      var m = a(33)
      a.d(t, 'parsePath', function() {
        return m.a
      })
      var p = r.a.createContext({}),
        f = function(e) {
          return r.a.createElement(p.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function g() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      f.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    162: function(e, t, a) {
      var n
      e.exports = ((n = a(166)) && n.default) || n
    },
    164: function(e, t, a) {
      'use strict'
      var n = a(165),
        r = a(0),
        i = a.n(r),
        o = a(8),
        u = a.n(o),
        c = a(167),
        l = a.n(c),
        s = a(161),
        d = a(163),
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
        f = function(e) {
          var t = e.children
          return i.a.createElement(s.StaticQuery, {
            query: '2328579951',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(l.a, {
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
            data: n,
          })
        }
      ;(f.propTypes = { children: u.a.node.isRequired }), (t.a = f)
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
    166: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(8),
        o = a.n(i),
        u = a(35),
        c = a(1),
        l = function(e) {
          var t = e.location,
            a = c.a.getResourcesForPathname(t.pathname)
          return r.a.createElement(u.a, { location: t, pageResources: a })
        }
      ;(l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = l)
    },
    168: function(e, t, a) {
      'use strict'
      var n = a(0),
        r = a.n(n),
        i = a(163),
        o = a(161),
        u = Object(i.a)(o.Link, { target: 'e1lc2hem0' })(
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
        c = Object(i.a)('nav', { target: 'e1lc2hem1' })(
          { display: 'flex', marginTop: '.5rem', marginBottom: '.5rem' },
          ';'
        )
      t.a = function() {
        return r.a.createElement(
          c,
          null,
          r.a.createElement(u, { to: '/' }, 'Home'),
          r.a.createElement(u, { to: '/about/' }, 'About')
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-f4a356e7ec6baec29391.js.map
