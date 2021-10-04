import * as ACTION_TYPES from '../actions/types'


export default function(httpState, action) {
  switch(action.type) {
    case ACTION_TYPES.SENDING: 
      return {loading: true, error: null}
    case ACTION_TYPES.RESPONSE:
      return {loading: false, ...httpState}
    case ACTION_TYPES.ERROR:
      return {error: action.errorMessage, loading: false}
    case 'CLEAR': 
      return { error: null, ...httpState}
    default: 
      throw new Error()
  }
}