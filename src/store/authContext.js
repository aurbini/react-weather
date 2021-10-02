import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuth: false, 
  login: () => {},
  logout: () => {}
})

const AuthProvider = props => {
  const [ authenticated, setIsAuthenticated ] = useState(false)

  function loginHandler() {
    console.log('login handler')
    setIsAuthenticated(true)
  }
  function logoutHandler() {
    console.log('logout handler')
    setIsAuthenticated(false)
  }
  return <AuthContext.Provider
            value={{ 
              login: loginHandler,
              logout: logoutHandler, 
              isAuth: authenticated 
            }}
          >
          {props.children}
        </AuthContext.Provider>
}

export default AuthProvider
