/* global tw */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Select from 'react-select';
import Layout from '../components/layout'
import styled from 'react-emotion';
import dateFormat from 'dateformat';
import EventBLock from '../components/EventBlock';

const MetaStuff = styled('p')`
  ${tw('mb-1')};
`;

const CheckImage = styled('form')`
  ${tw('py-2')};
`;

const NavLink = styled(Link)`
  ${tw('mr-2 text-center block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white no-underline')};
`;

const NavLinkNormal = styled('button')`
  ${tw('mr-2 text-center block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white no-underline cursor-pointer font-sans text-base')};
`;

const Navigation = styled('nav')`
  ${tw('flex my-2')};
`;

// not great
const sortByTime = (array) => {
  array.sort((a, b) => { 
    return new Date('1970/01/01 ' + a.time.substring(0, 4)) - new Date('1970/01/01 ' + b.time.substring(0, 4)) || a.title.localeCompare(b.title);
  });
  return array;
}

const saveToLocalStorage = (list) => {
  localStorage.setItem('going', JSON.stringify(list));
};

const getLocalStorage = () => {
  if (localStorage.hasOwnProperty('going')) {
    let value = localStorage.getItem('going');
    try {
      value = JSON.parse(value);
      return value;
    } catch (e) {
      // handle empty string
      return [];
    }
  }else{
    return [];
  }
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    const types = this.props.data.allDataJson.edges[0].node.types
    .sort((a,b) => a.name.localeCompare(b.name))
    .map((type) => {
      return {value: type.name, label: type.name,}
    });
    this.state = {
      options: types,
      selectedOption: [],
      originalList: this.props.data.allDataJson.edges[0].node.list,
      displayList: this.props.data.allDataJson.edges[0].node.list,
      goingList: getLocalStorage(),
      speakerImages: false,
      schedule: false
    }
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleGoingChange = this.handleGoingChange.bind(this);
    this.handleScheduleClick = this.handleScheduleClick.bind(this);
  }

  handleImageChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleScheduleClick(val){
    if(val === 'all'){
      this.setState({
        schedule: false
      });
    }else{
      this.setState({
        schedule: true
      });
    }
  }

  handleGoingChange(going, eventTitle){
    let list = this.state.goingList;
    if(going){
      list.push(eventTitle);
    }else{
      list = list.filter(item => item !== eventTitle);
    }
    this.setState({
      goingList: list
    });
    saveToLocalStorage(list);
  }

  handleChange = (selectedOption) => {
    let filteredList = this.state.originalList;
    if(selectedOption.length!==0){
      filteredList = this.state.originalList.filter(event => {
        return selectedOption.filter(option => event.type === option.value).length>0;
      });
    }

    this.setState({ selectedOption, displayList: filteredList });
  }

  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render() {
    const { selectedOption } = this.state;
    const data = this.props.data;
    return (
      <Layout>
        <Navigation>
          <NavLinkNormal onClick={() => this.handleScheduleClick('all')}>All</NavLinkNormal>
          <NavLinkNormal onClick={() => this.handleScheduleClick('schedule')}>My Schedule</NavLinkNormal>
          <NavLink to={'/about/'}>About</NavLink>
        </Navigation>
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
        isMulti={true}
        isSearchable={true}
        placeholder={`Select multiple sections`}
        isDisabled={this.state.schedule}
      />
      <CheckImage>
        <label>
          Show Speaker Images:
          <input
            name="speakerImages"
            type="checkbox"
            checked={this.state.speakerImages}
            onChange={this.handleImageChange} />
        </label>
      </CheckImage>
        <small>Updated: {dateFormat(data.allDataJson.edges[0].node.date, 'd mmm yy, h:MM TT')}</small>
        <MetaStuff>Total: {this.state.schedule?this.state.goingList.length:this.state.displayList.length}</MetaStuff>
        {(this.state.goingList.length === 0 && this.state.schedule) &&
        <h2>No sessions in your schedule, add some on the home page.</h2>}
        {this.state.schedule &&
          sortByTime(this.state.originalList).map((event) => {
            if(this.state.goingList.find(going => going === event.title)!==undefined){
              return (
                <EventBLock 
                  key={`${event.title} ${event.room} ${event.time}`} 
                  event={event} speakerImages={this.state.speakerImages} 
                  going={true}
                  onGoingChange={(value) => this.handleGoingChange(value, event.title)}
                  ></EventBLock>
              )
            }
          })
        }
        {!this.state.schedule &&
          sortByTime(this.state.displayList).map((event) => {
              return (
                <EventBLock 
                key={`${event.title} ${event.room} ${event.time}`} 
                event={event} speakerImages={this.state.speakerImages} 
                going={this.state.goingList.find(going => going === event.title)!==undefined}
                onGoingChange={(value) => this.handleGoingChange(value, event.title)}
                ></EventBLock>
              )
          })
        }

      </Layout>
    )
  }
}

export default IndexPage


export const pageQuery = graphql`
  query {
    allDataJson{
      edges{
        node {
          date
          types{
            name
          }
          list{
            link
            type
            time
            room
            title
            speakers{
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
