/* global tw */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Select from 'react-select'
import Layout from '../components/layout'
import styled from 'react-emotion'
import dateFormat from 'dateformat'
import EventBLock from '../components/EventBlock'

const MetaStuff = styled('p')`
  ${tw('mb-1')};
`

const CheckImage = styled('form')`
  ${tw('py-2')};
`

const NavLink = styled(Link)`
  ${tw(
    'mr-2 text-center block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white no-underline'
  )};
`

const NavLinkNormal = styled('button')`
  ${tw(
    'mr-2 text-center block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white no-underline cursor-pointer font-sans text-base'
  )};
`

const Navigation = styled('nav')`
  ${tw('flex my-2')};
`

const MenuSticky = styled('nav')`
  background-color: rgba(246, 246, 246, 0.9);
  ${tw('py-1')};
  z-index: 3;
  position: sticky;
  top: -1px;
`;

const TimeSelect = styled(Select)`
${tw('mt-1')};
`

// not great
const sortByTime = array => {
  array.sort((a, b) => {
    return (
      new Date('1970/01/01 ' + a.time.substring(0, 4)) -
        new Date('1970/01/01 ' + b.time.substring(0, 4)) ||
      a.title.localeCompare(b.title)
    )
  })
  return array
}

const saveToLocalStorage = list => {
  if (typeof window !== `undefined`) {
    localStorage.setItem('going', JSON.stringify(list))
  }
}

const getLocalStorage = () => {
  if (typeof window !== `undefined`) {
    if (localStorage.hasOwnProperty('going')) {
      let value = localStorage.getItem('going')
      try {
        value = JSON.parse(value)
        return value
      } catch (e) {
        // handle empty string
        return []
      }
    } else {
      return []
    }
  } else {
    return []
  }
}

const timeOptions = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(time => 
  {
    return {
      value: time,
      label: `After ${time}`
    }
  });

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    const types = this.props.data.allDataJson.edges[0].node.types
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(type => {
        return { value: type.name, label: type.name }
      })
    this.state = {
      options: types,
      selectedOption: [],
      selectedTimeOption: timeOptions[0],
      timeOptions,
      originalList: this.props.data.allDataJson.edges[0].node.list,
      displayList: this.props.data.allDataJson.edges[0].node.list,
      goingList: getLocalStorage(),
      speakerImages: false,
      schedule: false,
    }
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleGoingChange = this.handleGoingChange.bind(this)
    this.handleScheduleClick = this.handleScheduleClick.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
  }

  handleImageChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleScheduleClick(val) {
    if (val === 'all') {
      this.setState({
        schedule: false,
      })
    } else {
      this.setState({
        schedule: true,
      })
    }
  }

  handleGoingChange(going, eventTitle) {
    let list = this.state.goingList
    if (going) {
      list.push(eventTitle)
    } else {
      list = list.filter(item => item !== eventTitle)
    }
    this.setState({
      goingList: list,
    })
    saveToLocalStorage(list)
  }

  handleChange = selectedOption => {
    let filteredList = this.state.originalList
    if (selectedOption.length !== 0) {
      filteredList = this.state.originalList.filter(event => {
        return (
          selectedOption.filter(option => event.type === option.value).length >
          0
        )
      })
    }

    this.setState({ selectedOption, selectedTimeOption: timeOptions[0], displayList: filteredList })
  }

  handleTimeChange = selectedOption => {
    let filteredList = [];
    if (selectedOption.length !== 0) {
      filteredList = this.state.displayList.filter(event => {
        return new Date('1970/01/01 ' + event.time.substring(0, 4))>=new Date('1970/01/01 ' + selectedOption.value)
      })
    }

    this.setState({ selectedTimeOption: selectedOption, displayList: filteredList })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { selectedOption } = this.state
    const data = this.props.data
    return (
      <Layout>
        <MenuSticky>
          <Navigation>
            <NavLinkNormal onClick={() => this.handleScheduleClick('all')}>
              All
            </NavLinkNormal>
            <NavLinkNormal onClick={() => this.handleScheduleClick('schedule')}>
              My Schedule
            </NavLinkNormal>
            <NavLink to={'/about/'}>About</NavLink>
          </Navigation>
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
            isMulti={true}
            isSearchable={true}
            placeholder={`Select multiple sections`}
            isDisabled={this.state.schedule}
          />
          <TimeSelect
            value={this.state.selectedTimeOption}
            onChange={this.handleTimeChange}
            options={this.state.timeOptions}
            isMulti={false}
            isSearchable={true}
            placeholder={`Select Start Time`}
            isDisabled={this.state.schedule}
          />
        </MenuSticky>
        {/* <CheckImage>
        <label>
          Show Speaker Images:
          <input
            name="speakerImages"
            type="checkbox"
            checked={this.state.speakerImages}
            onChange={this.handleImageChange} />
        </label>
      </CheckImage> */}
        <p>
          <small>
            Updated:{' '}
            {dateFormat(
              data.allDataJson.edges[0].node.date,
              'd mmm yy, h:MM TT'
            )}
          </small>
        </p>
        <MetaStuff>
          Total:{' '}
          {this.state.schedule
            ? this.state.goingList.length
            : this.state.displayList.length}
        </MetaStuff>
        {this.state.goingList.length === 0 &&
          this.state.schedule && (
            <h2>No sessions in your schedule, add some on the home page.</h2>
          )}
        {this.state.schedule &&
          sortByTime(this.state.originalList).map(event => {
            if (
              this.state.goingList.find(going => going === event.title) !==
              undefined
            ) {
              return (
                <EventBLock
                  key={`${event.title} ${event.room} ${event.time}`}
                  event={event}
                  speakerImages={this.state.speakerImages}
                  going={true}
                  onGoingChange={value =>
                    this.handleGoingChange(value, event.title)
                  }
                />
              )
            }
          })}
        {!this.state.schedule &&
          sortByTime(this.state.displayList).map(event => {
            return (
              <EventBLock
                key={`${event.title} ${event.room} ${event.time}`}
                event={event}
                speakerImages={this.state.speakerImages}
                going={
                  this.state.goingList.find(going => going === event.title) !==
                  undefined
                }
                onGoingChange={value =>
                  this.handleGoingChange(value, event.title)
                }
              />
            )
          })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          date
          types {
            name
          }
          list {
            link
            type
            time
            room
            title
            speakers {
              name
              image
              company
            }
          }
        }
      }
    }
  }
`
