;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    159: function(e, t, n) {
      'use strict'
      n.r(t), n(88), n(170), n(171), n(84), n(52)
      var a = n(13),
        r = n.n(a),
        i = n(51),
        o = n.n(i),
        l = (n(87), n(0)),
        s = n.n(l),
        c = n(161),
        d = n(199),
        u = n(164),
        g = n(163),
        m = n(196),
        p = n.n(m),
        h = (n(197), n(8)),
        f = n.n(h),
        y = Object(g.a)('h2', { target: 'e20pinw0' })(
          {
            fontFamily:
              'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
          },
          ';'
        ),
        b = Object(g.a)('h3', { target: 'e20pinw1' })(
          {
            fontFamily:
              'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
            marginTop: '.5rem',
            marginBottom: '.5rem',
          },
          ';'
        ),
        v = Object(g.a)('div', { target: 'e20pinw2' })(
          {
            display: 'flex',
            marginTop: '0',
            marginBottom: '0',
            paddingTop: '0',
            paddingBottom: '0',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          },
          ';'
        ),
        k = Object(g.a)('div', { target: 'e20pinw3' })(
          {
            borderRadius: '.25rem',
            overflow: 'hidden',
            boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)',
            marginBottom: '.25rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingBottom: '1rem',
          },
          ';'
        ),
        w = Object(g.a)('div', { target: 'e20pinw4' })(
          { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' },
          ';div{',
          { paddingLeft: '.25rem', paddingRight: '.25rem' },
          '}img{',
          { width: '8rem' },
          '}p{',
          {
            width: '8rem',
            paddingTop: '0',
            paddingBottom: '0',
            marginTop: '0',
            marginBottom: '0',
            textAlign: 'center',
          },
          '}'
        ),
        S = Object(g.a)('a', { target: 'e20pinw5' })(
          { marginTop: '.5rem', marginBottom: '.5rem', display: 'block' },
          ';'
        ),
        C = Object(g.a)('svg', { target: 'e20pinw6' })(
          {
            padding: '.5rem',
            stroke: 'currentColor',
            color: '#e3342f',
            cursor: 'pointer',
            ':hover': { color: '#cc1f1a' },
          },
          ';'
        ),
        E = Object(g.a)('svg', { target: 'e20pinw7' })(
          {
            padding: '.5rem',
            stroke: 'currentColor',
            color: '#38c172',
            cursor: 'pointer',
            ':hover': { color: '#1f9d55' },
          },
          ';'
        ),
        x = Object(g.a)('span', { target: 'e20pinw8' })(
          { padding: '.5rem' },
          ';'
        ),
        L = Object(g.a)('div', { target: 'e20pinw9' })(
          { display: 'flex', alignItems: 'center' },
          ';'
        ),
        O = (function(e) {
          function t(t) {
            var n
            return (
              ((n = e.call(this, t) || this).state = { going: n.props.going }),
              (n.handleSubmit = n.handleSubmit.bind(o()(o()(n)))),
              n
            )
          }
          r()(t, e)
          var n = t.prototype
          return (
            (n.handleSubmit = function() {
              this.props.onGoingChange(!this.state.going),
                this.setState({ going: !this.state.going })
            }),
            (n.render = function() {
              var e = this,
                t = this.props.event
              return s.a.createElement(
                k,
                null,
                s.a.createElement(y, null, t.title),
                s.a.createElement(
                  v,
                  null,
                  s.a.createElement(b, null, t.room),
                  s.a.createElement(b, null, t.time)
                ),
                s.a.createElement(b, null, 'Section: ', t.type),
                s.a.createElement(b, null, 'Speakers:'),
                s.a.createElement(
                  w,
                  null,
                  t.speakers.map(function(t) {
                    return s.a.createElement(
                      'div',
                      { key: t.name },
                      e.props.speakerImages &&
                        s.a.createElement('img', { src: t.image }),
                      s.a.createElement('p', null, '' + t.name),
                      s.a.createElement('p', null, '(' + t.company + ')')
                    )
                  })
                ),
                s.a.createElement(
                  S,
                  { target: '_blank', rel: 'noopener', href: t.link },
                  'Leaderex Link'
                ),
                s.a.createElement(
                  L,
                  null,
                  !this.state.going &&
                    s.a.createElement(
                      C,
                      {
                        alt: 'Not going button',
                        onClick: function() {
                          return e.handleSubmit()
                        },
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      },
                      s.a.createElement('circle', {
                        cx: '12',
                        cy: '12',
                        r: '10',
                      })
                    ),
                  this.state.going &&
                    s.a.createElement(
                      E,
                      {
                        alt: 'Going button',
                        onClick: function() {
                          return e.handleSubmit()
                        },
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      },
                      s.a.createElement('path', {
                        d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
                      }),
                      s.a.createElement('polyline', {
                        points: '22 4 12 14.01 9 11.01',
                      })
                    ),
                  s.a.createElement(
                    x,
                    null,
                    'Click to ' +
                      (this.state.going ? 'remove from your' : 'add to your') +
                      '  schedule'
                  )
                )
              )
            }),
            t
          )
        })(s.a.Component)
      O.propTypes = {
        event: f.a.object.isRequired,
        speakerImages: f.a.bool.isRequired,
        going: f.a.bool.isRequired,
      }
      var I = O
      n.d(t, 'pageQuery', function() {
        return M
      })
      var R = Object(g.a)('p', { target: 'e12h3s7g0' })(
          { marginBottom: '.25rem' },
          ';'
        ),
        j = Object(g.a)('form', { target: 'e12h3s7g1' })(
          { paddingTop: '.5rem', paddingBottom: '.5rem' },
          ';'
        ),
        B = Object(g.a)(c.Link, { target: 'e12h3s7g2' })(
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
        T = Object(g.a)('button', { target: 'e12h3s7g3' })(
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
            cursor: 'pointer',
            fontFamily:
              'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
            fontSize: '1rem',
            ':hover': { backgroundColor: '#2779bd' },
          },
          ';'
        ),
        F = Object(g.a)('nav', { target: 'e12h3s7g4' })(
          { display: 'flex', marginTop: '.5rem', marginBottom: '.5rem' },
          ';'
        ),
        q = function(e) {
          return (
            e.sort(function(e, t) {
              return (
                new Date('1970/01/01 ' + e.time.substring(0, 4)) -
                  new Date('1970/01/01 ' + t.time.substring(0, 4)) ||
                e.title.localeCompare(t.title)
              )
            }),
            e
          )
        },
        U = function() {
          if ('undefined' != typeof window) {
            if (!localStorage.hasOwnProperty('going')) return []
            var e = localStorage.getItem('going')
            try {
              return JSON.parse(e)
            } catch (e) {
              return []
            }
          }
        },
        D = (function(e) {
          function t(t) {
            var n
            ;(n = e.call(this, t) || this).handleChange = function(e) {
              var t = n.state.originalList
              0 !== e.length &&
                (t = n.state.originalList.filter(function(t) {
                  return (
                    e.filter(function(e) {
                      return t.type === e.value
                    }).length > 0
                  )
                })),
                n.setState({ selectedOption: e, displayList: t })
            }
            var a = n.props.data.allDataJson.edges[0].node.types
              .sort(function(e, t) {
                return e.name.localeCompare(t.name)
              })
              .map(function(e) {
                return { value: e.name, label: e.name }
              })
            return (
              (n.state = {
                options: a,
                selectedOption: [],
                originalList: n.props.data.allDataJson.edges[0].node.list,
                displayList: n.props.data.allDataJson.edges[0].node.list,
                goingList: U(),
                speakerImages: !1,
                schedule: !1,
              }),
              (n.handleImageChange = n.handleImageChange.bind(o()(o()(n)))),
              (n.handleGoingChange = n.handleGoingChange.bind(o()(o()(n)))),
              (n.handleScheduleClick = n.handleScheduleClick.bind(o()(o()(n)))),
              n
            )
          }
          r()(t, e)
          var n = t.prototype
          return (
            (n.handleImageChange = function(e) {
              var t,
                n = e.target,
                a = 'checkbox' === n.type ? n.checked : n.value,
                r = n.name
              this.setState((((t = {})[r] = a), t))
            }),
            (n.handleScheduleClick = function(e) {
              'all' === e
                ? this.setState({ schedule: !1 })
                : this.setState({ schedule: !0 })
            }),
            (n.handleGoingChange = function(e, t) {
              var n = this.state.goingList
              e
                ? n.push(t)
                : (n = n.filter(function(e) {
                    return e !== t
                  })),
                this.setState({ goingList: n }),
                (function(e) {
                  'undefined' != typeof window &&
                    localStorage.setItem('going', JSON.stringify(e))
                })(n)
            }),
            (n.componentDidMount = function() {}),
            (n.componentWillUnmount = function() {}),
            (n.render = function() {
              var e = this,
                t = this.state.selectedOption,
                n = this.props.data
              return s.a.createElement(
                u.a,
                null,
                s.a.createElement(
                  F,
                  null,
                  s.a.createElement(
                    T,
                    {
                      onClick: function() {
                        return e.handleScheduleClick('all')
                      },
                    },
                    'All'
                  ),
                  s.a.createElement(
                    T,
                    {
                      onClick: function() {
                        return e.handleScheduleClick('schedule')
                      },
                    },
                    'My Schedule'
                  ),
                  s.a.createElement(B, { to: '/about/' }, 'About')
                ),
                s.a.createElement(d.a, {
                  value: t,
                  onChange: this.handleChange,
                  options: this.state.options,
                  isMulti: !0,
                  isSearchable: !0,
                  placeholder: 'Select multiple sections',
                  isDisabled: this.state.schedule,
                }),
                s.a.createElement(
                  j,
                  null,
                  s.a.createElement(
                    'label',
                    null,
                    'Show Speaker Images:',
                    s.a.createElement('input', {
                      name: 'speakerImages',
                      type: 'checkbox',
                      checked: this.state.speakerImages,
                      onChange: this.handleImageChange,
                    })
                  )
                ),
                s.a.createElement(
                  'small',
                  null,
                  'Updated: ',
                  p()(n.allDataJson.edges[0].node.date, 'd mmm yy, h:MM TT')
                ),
                s.a.createElement(
                  R,
                  null,
                  'Total: ',
                  this.state.schedule
                    ? this.state.goingList.length
                    : this.state.displayList.length
                ),
                0 === this.state.goingList.length &&
                  this.state.schedule &&
                  s.a.createElement(
                    'h2',
                    null,
                    'No sessions in your schedule, add some on the home page.'
                  ),
                this.state.schedule &&
                  q(this.state.originalList).map(function(t) {
                    if (
                      void 0 !==
                      e.state.goingList.find(function(e) {
                        return e === t.title
                      })
                    )
                      return s.a.createElement(I, {
                        key: t.title + ' ' + t.room + ' ' + t.time,
                        event: t,
                        speakerImages: e.state.speakerImages,
                        going: !0,
                        onGoingChange: function(n) {
                          return e.handleGoingChange(n, t.title)
                        },
                      })
                  }),
                !this.state.schedule &&
                  q(this.state.displayList).map(function(t) {
                    return s.a.createElement(I, {
                      key: t.title + ' ' + t.room + ' ' + t.time,
                      event: t,
                      speakerImages: e.state.speakerImages,
                      going:
                        void 0 !==
                        e.state.goingList.find(function(e) {
                          return e === t.title
                        }),
                      onGoingChange: function(n) {
                        return e.handleGoingChange(n, t.title)
                      },
                    })
                  })
              )
            }),
            t
          )
        })(s.a.Component),
        M = ((t.default = D), '235162003')
    },
    161: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return h
        }),
        n.d(t, 'StaticQueryContext', function() {
          return m
        }),
        n.d(t, 'StaticQuery', function() {
          return p
        })
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        l = n(160),
        s = n.n(l)
      n.d(t, 'Link', function() {
        return s.a
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
      var c = n(50)
      n.d(t, 'waitForRouteChange', function() {
        return c.a
      })
      var d = n(162),
        u = n.n(d)
      n.d(t, 'PageRenderer', function() {
        return u.a
      })
      var g = n(33)
      n.d(t, 'parsePath', function() {
        return g.a
      })
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
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
        s = n(167),
        c = n.n(s),
        d = n(161),
        u = n(163),
        g = Object(u.a)('div', { target: 'e1qsw1o60' })(
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
        m = Object(u.a)('h1', { target: 'e1qsw1o61' })(
          {
            fontFamily:
              'system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
          },
          ';'
        ),
        p = function(e) {
          var t = e.children
          return i.a.createElement(d.StaticQuery, {
            query: '2328579951',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(c.a, {
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
                  g,
                  null,
                  i.a.createElement(m, null, e.site.siteMetadata.title),
                  i.a.createElement('div', null, t)
                )
              )
            },
            data: a,
          })
        }
      ;(p.propTypes = { children: l.a.node.isRequired }), (t.a = p)
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
        s = n(1),
        c = function(e) {
          var t = e.location,
            n = s.a.getResourcesForPathname(t.pathname)
          return r.a.createElement(l.a, { location: t, pageResources: n })
        }
      ;(c.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = c)
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-8719cb3dc9b8808988d6.js.map
