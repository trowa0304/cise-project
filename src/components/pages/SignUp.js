import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../homepage-components/SearchButton.css";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";


export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropDownValue: "Select an item"
          }
    }

    componentDidMount() {
        console.log(this.props.history.location.state);
    }

    changeValue(text) {
        this.setState({ dropDownValue: text })
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#LogIn">Log in</Nav.Link>
                    </Nav>
                </Navbar>

                <h2 className="foo" id="heading">SEER SIGN UP</h2>

                <div class="middle" data-label="User Name">
                    <input type="text" name="userName" placeholder="User Name" />
                </div>

                <div class="middle" data-label="Password">
                    <input type="password" name="password" placeholder="Password" />
                </div>

                <div class="middle" >
                    {/* Authority Filter */}
                    <DropdownButton
                        id="dropdown-basic-button"
                        //title="Limits of authority"
                        className="authority-dropdown"
                        title={this.state.dropDownValue}
                    >
                        <Dropdown.Item onClick={() => this.changeValue('Moderator')}>Moderator</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.changeValue('Analyst')}>Analyst</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.changeValue('Administrator')}>Administrator</Dropdown.Item>
                    </DropdownButton>
                </div>

                <div align="center">
                    <Button className="loginButton">Registe</Button>
                </div>
            </div>
        )
    }
}
