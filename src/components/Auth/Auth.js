import React, { useContext } from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Auth.css';
import { AuthContext } from '../../store/authContext';


const Auth = props => {
  const { login } = useContext(AuthContext)
  const loginHandler = () => {
    login()
  }
  return (
    <div className="auth">
      <Card>
        <Card.Body>
          <Card.Title>Please Login</Card.Title>
          <Card.Text>
            Login to get started using the weather app
          </Card.Text>
          <Button onClick={loginHandler}variant="primary">Login</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Auth;