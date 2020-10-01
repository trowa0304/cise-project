import React from "react";
import { Alert, Button, Container, Form, FormControl } from "react-bootstrap";
import "./SubmitForm.css";

class SubmitForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            submitAuthor: "NULL",
            submitPublishYear: "NULL",
            submitTitle: "NULL",
            submitPublisher: "NULL",
            submitVolume: "NULL",
            submitPageNumber: "NULL",
            submitDOI: "NULL",
        };
        
        this.alertBox = <Alert className="alert-primary">Please fill in the form</Alert>;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        fetch("https://aut-cise-api.herokuapp.com/submitEvidence/" + encodeURIComponent(this.state.submitAuthor) + "&" + encodeURIComponent(this.state.submitPublishYear) + "&" + encodeURIComponent(this.state.submitTitle) + "&" + "1" + "&" + encodeURIComponent(this.state.submitPublisher) + "&" + encodeURIComponent(this.state.submitVolume) + "&" + encodeURIComponent(this.state.submitPageNumber) + "&" + encodeURIComponent(this.state.submitDOI))
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status)
            {
                this.alertBox = <Alert className="alert-success">Successfully added new evidence</Alert>;
            }
            else
            {
                this.alertBox = <Alert className="alert-danger">Failed to add new evidence</Alert>;
            }
        });
    }
    
    handleChange(event)
    {
        const target = event.target;
        const value = target.value ?? "NULL";
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container fluid className="container-size">
                <h1>Submit Evidence</h1>
                {this.alertBox}
                <Form onSubmit={this.handleSubmit}>
                    {/* Author */}
                    <Form.Group controlId="author">
                        <Form.Label>Author</Form.Label>
                        <FormControl name="submitAuthor" onChange={this.handleChange} placeholder="Author" required></FormControl>
                    </Form.Group>

                    {/* Year */}
                    <Form.Group controlId="year">
                        <Form.Label>Published Date</Form.Label>
                        <FormControl name="submitPublishYear" onChange={this.handleChange} placeholder="Date or year" required></FormControl>
                    </Form.Group>

                    {/* Title */}
                    <Form.Group controlId="title">
                        <Form.Label>Title of Article</Form.Label>
                        <FormControl name="submitTitle" onChange={this.handleChange} placeholder="Title" required></FormControl>
                    </Form.Group>

                    {/* Publisher */}
                    <Form.Group controlId="publisher">
                        <Form.Label>Publisher Name</Form.Label>
                        <FormControl name="submitPublisher" onChange={this.handleChange} placeholder="Publisher Name"></FormControl>
                    </Form.Group>

                    {/* Volume */}
                    <Form.Group controlId="volumeNo">
                        <Form.Label>Volume</Form.Label>
                        <FormControl name="submitVolume" onChange={this.handleChange} placeholder="Vol"></FormControl>
                    </Form.Group>

                    {/* Page Number */}
                    <Form.Group controlId="pageNo">
                        <Form.Label>Page Number</Form.Label>
                        <FormControl name="submitPageNumber" onChange={this.handleChange} placeholder="Page Number(s)"></FormControl>
                    </Form.Group>

                    {/* DOI Link */}
                    <Form.Group controlId="doi">
                        <Form.Label>DOI Link</Form.Label>
                        <FormControl name="submitDOI" onChange={this.handleChange} placeholder="DOI"></FormControl>
                    </Form.Group>

                    {/* Submit Button */}
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default SubmitForm;
