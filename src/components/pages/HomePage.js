import React from "react";
import SearchBar from "../homepage-components/SearchBar";
import SearchFilter from "../homepage-components/SearchFilter";
import SearchButton from "../homepage-components/SearchButton";
import SearchResultTable from "../homepage-components/SearchResultTable";
import { Alert, Container, Form } from "react-bootstrap";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            results: [],
            alertBox: <Alert className="alert-primary">Please fill in the form</Alert>
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({ alertBox: <Alert className="alert-secondary">Loading</Alert>});

        fetch("https://aut-cise-api.herokuapp.com/search/" + encodeURIComponent(this.state.searchQuery))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status) {
                    this.setState({ alertBox: <Alert className="alert-success">{data.msg}</Alert>, results: data.evidences });
                }
                else {
                    this.setState({ alertBox: <Alert className="alert-danger">{data.msg}</Alert> });
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
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <SearchBar onChange={this.handleChange}/>
                    <SearchFilter />
                    <SearchButton />
                </Form>
                <div className="mt-3">{this.state.alertBox}</div>
                <SearchResultTable results={this.state.results}></SearchResultTable>
            </Container>
        );
    }
}
export default HomePage;
