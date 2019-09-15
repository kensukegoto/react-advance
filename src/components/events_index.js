import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import {
  readEvents
} from '../actions'

class EventsIndex extends Component {

  componentDidMount(){
    console.log("componentDidMount");
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events,(event,index)=>(
      <tr key={index}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </>
    );
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()), // readEventsではaxiosを扱う、この関数を経由してReducerにdispathされるイメージ
})

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)
