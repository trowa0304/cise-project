import React from "react";
import { Alert } from "react-bootstrap";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "null",
            alertBox: <Alert className="alert-primary">Please fill in the form</Alert>
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch("https://aut-cise-api.herokuapp.com/search/" + encodeURIComponent(this.state.searchQuery))
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    this.setState({ alertBox: <Alert className="alert-success">Successfully added new evidence</Alert> });
                }
                else {
                    this.setState({ alertBox: <Alert className="alert-danger">Failed to add new evidence</Alert> });
                }
            });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value ?? "NULL";
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <h1 className="foo" id="heading">SEER</h1>
                {this.state.alertBox}
                <input type="text" placeholder="Search" onChange={this.handleChange} name="searchQuery" className="extendedbar"></input>
            </div>
        );
    }
}
export default SearchBar;
