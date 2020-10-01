import React from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import "./SubmitForm.css";

class SubmitForm extends React.Component {
  render() {
    return (
      <Container fluid className="container-size">
        <h1>Submit Evidence</h1>
        <Form>
          {/* Author */}
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <FormControl placeholder="Author"></FormControl>
          </Form.Group>

          {/* Year */}
          <Form.Group controlId="year">
            <Form.Label>Published Year</Form.Label>
            <FormControl placeholder="Year"></FormControl>
          </Form.Group>

          {/* Title */}
          <Form.Group controlId="title">
            <Form.Label>Title of Article</Form.Label>
            <FormControl placeholder="Title"></FormControl>
          </Form.Group>

          {/* Publisher */}
          <Form.Group controlId="publisher">
            <Form.Label>Publisher Name</Form.Label>
            <FormControl placeholder="Publisher Name"></FormControl>
          </Form.Group>

          {/* Volume */}
          <Form.Group controlId="volumeNo">
            <Form.Label>Year of Publication</Form.Label>
            <FormControl placeholder="Year"></FormControl>
          </Form.Group>

          {/* Page Number */}
          <Form.Group controlId="pageNo">
            <Form.Label>Page Number</Form.Label>
            <FormControl placeholder="Page Number(s)"></FormControl>
          </Form.Group>

          {/* DOI Link */}
          <Form.Group controlId="doi">
            <Form.Label>DOI Link</Form.Label>
            <FormControl placeholder="DOI"></FormControl>
          </Form.Group>

          {/* Submit Button */}
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SubmitForm;
