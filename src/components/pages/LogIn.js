import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../homepage-components/SearchButton.css";

export default class Login extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log(this.props.history.location.state);
    }

    confirm = () =>{
        this.props.history.push('/SignUp')
    }

    render() {
        return (
            <div>
                 <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Back to Homepage</Nav.Link>
                    </Nav>
                </Navbar>
                
                <h2 className="foo" id="heading">SEER LOG IN</h2>

                <div class="middle" data-label="User Name">
			        <input type="text" name="userName" placeholder="User Name" />
		        </div>

		        <div class="middle" data-label="Password">
			        <input type="password" name="password" placeholder="Password" />
		        </div>

                <div align="center">
                <Button className="loginButton">Log In</Button>
                </div>

                <div align="center" class="register">
                <label >New to SEER?</label>
                </div>
                <div align="center">
                <Button className="loginButton" onClick={this.confirm}>Sign Up</Button>  
                </div>
            </div>
        )
    }
}
