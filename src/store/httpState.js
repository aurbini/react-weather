import React, { useReducer } from 'react';

import httpReducer from './reducers/httpReducer';

export const HttpContext = React.createContext()
const { Provider } = HttpContext

const HttpProvider = props => {
  const [state, dispatch] = useReducer(httpReducer, {
    loading: false, 
    error: null
  })

  return <Provider value={[state, dispatch]} {...props} />
}

export default HttpProvider
