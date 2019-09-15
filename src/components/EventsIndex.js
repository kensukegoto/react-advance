import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  readEvents
} from '../actions'


class EventsIndex extends Component {

  componentDidMount(){
    console.log("componentDidMount");
    this.props.readEvents()
  }

  render() {
    const props = this.props

    return (
      <>
        <div>value: {props.value}</div>
        <button onClick={props.imcrement}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()),
})

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)
