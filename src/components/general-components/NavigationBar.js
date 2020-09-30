import React from "react";
import "./NavigationBar.css";
import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">SEER</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#features">Submit New Evidence</Nav.Link>
            <Nav.Link pullRight href='#LogIn'style={{justifyContent: 'right'}} activeStyle={{fontWeight: 'bold', color: 'red'}}>Log in/Sign up</Nav.Link>
            <h1>REMOVE ME AFTER</h1>

          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;
