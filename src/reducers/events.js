import _ from 'lodash'
import { 
  CREATE_EVENT,
  READ_EVENTS,
  DELETE_EVENT,
  UPDATE_EVENT,
  READ_EVENT
 } from '../actions'

export default (events = {},action) => {

  switch(action.type){
    case READ_EVENTS:
      return _.mapKeys(action.response.data,'id')
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return {...events,[data.id]: data}
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events } // スプレッド演算子使わずともOK
    default:
      return events
  }
}