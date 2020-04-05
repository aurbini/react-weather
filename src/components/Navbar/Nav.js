import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Nav.css';
import { Link } from "react-router-dom"; 


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/hourly">Hourly</Nav.Link>
    </Nav>
  </Navbar>
  );
}
 
export default NavBar;