/* global tw */
import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const EventHeading = styled('h2')`
  ${tw('font-sans')};
`;

const EventSubHeading = styled('h3')`
  ${tw('font-sans my-2')};
`;

const Room = styled('div')`
  ${tw('flex my-0 py-0 flex-wrap justify-between')};
`;

const Card = styled('div')`
  ${tw('rounded overflow-hidden shadow mb-1 px-4 pb-4')};
`;

const Speakers = styled('div')`
  ${tw('flex flex-wrap justify-center')};
  div{
    ${tw('px-1')}
  }
  img{
    ${tw('w-32')}
  }
  p{
    ${tw('w-32 py-0 my-0 text-center')}
  }
`;

const LLink = styled('a')`
  ${tw('my-2 block')};
`;

const Empty = styled('svg')`
  ${tw('p-2 stroke-current text-red cursor-pointer hover:text-red-dark')};
`;

const Full = styled('svg')`
  ${tw('p-2 stroke-current text-green cursor-pointer hover:text-green-dark')};
`;

const Help = styled('span')`
  ${tw('p-2')};
`;

const ButtonsGoing = styled('div')`
  ${tw('flex items-center')};
`;

class EventBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { going: this.props.going }

    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    this.props.onGoingChange(!this.state.going);
    this.setState({
      going: !this.state.going
    })
  }

  render() {
    const event = this.props.event;
    return (
      <Card>
        <EventHeading>{event.title}</EventHeading>
        <Room>
          <EventSubHeading>{event.room}</EventSubHeading>
          <EventSubHeading>{event.time}</EventSubHeading>
        </Room>
        <EventSubHeading>Section: {event.type}</EventSubHeading>
        <EventSubHeading>Speakers:</EventSubHeading>
        <Speakers>
        {event.speakers.map(speaker => {
          return (
            <div key={speaker.name}>
              {this.props.speakerImages && <img src={speaker.image} />}
              <p>{`${speaker.name}`}</p>
              <p>{`(${speaker.company})`}</p>
            </div>
          )
        })}
        </Speakers>
        <LLink target="_blank" rel="noopener" href={event.link}>Leaderex Link</LLink>
        <ButtonsGoing>
          {!this.state.going && <Empty alt="Not going button" onClick={() => this.handleSubmit()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></Empty>}
          {this.state.going && <Full alt="Going button" onClick={() => this.handleSubmit()}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></Full>}
          <Help>{`Click to ${!this.state.going?`add to your`:`remove from your`}  schedule`}</Help>
        </ButtonsGoing>
      </Card>
    )
  }
}

EventBlock.propTypes = {
  event: PropTypes.object.isRequired,
  speakerImages: PropTypes.bool.isRequired,
  going: PropTypes.bool.isRequired
}

export default EventBlock
