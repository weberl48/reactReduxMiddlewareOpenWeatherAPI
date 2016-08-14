import { FETCH_WEATHER } from '../actions/index'


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //using concat instead of push, push mutates state. concat returns a new version of state
      // return state.concat([action.payload.data])
    //es6 syntax
    return [ action.payload.data, ...state ]; //create a new array
  }
  return state
}
