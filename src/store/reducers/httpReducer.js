import * as ACTION_TYPES from '../actions/types'


export default function(httpState, action) {
  switch(action.type) {
    case ACTION_TYPES.SENDING:
      console.log('sending to server') 
      return {loading: true, error: null}
    case ACTION_TYPES.RESPONSE:
      console.log('response from server')
      return {loading: false, error: null}
    case ACTION_TYPES.ERROR:
      console.log(action)
      console.log('error reducer hit')
      return {error: action.errorMessage, loading: false}
    case 'CLEAR': 
      return { error: null, ...httpState}
    default: 
      throw new Error()
  }
}