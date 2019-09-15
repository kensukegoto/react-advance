import { READ_EVENTS } from '../actions'


export default (state = {},action) => {

  console.log(action)
  switch(action.type){
    case READ_EVENTS:
      return state
    default:
      return state
  }
}