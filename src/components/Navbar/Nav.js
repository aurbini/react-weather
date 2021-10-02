import React, {useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Nav.css';
import { AuthContext } from '../../store/authContext';
import Button from 'react-bootstrap/Button'

const NavBar = () => {
  const { logout } = useContext(AuthContext)
  const logoutHandler = () => {
    logout()
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/hourly">Hourly</Nav.Link>
      </Nav> 
      <Button onClick={logoutHandler}>Logout</Button>
    </Navbar>
  );
}
 
export default NavBar;