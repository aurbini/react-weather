import React, { useReducer, useContext } from 'react';

import httpReducer from './reducers/httpReducer';

const HttpContext = React.createContext()
const { Provider } = HttpContext

const HttpProvider = props => {
  const [state, dispatch] = useReducer(httpReducer, {
    loading: false, 
    error: null
  })

  return <Provider value={[state, dispatch]} {...props} />
}

const useHttpContext = () => {
  return useContext(HttpContext)
}

export { HttpProvider, useHttpContext } 
