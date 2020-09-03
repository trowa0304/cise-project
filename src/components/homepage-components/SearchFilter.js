import React from "react";
import "./SearchFilter.css";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";

class SearchFilter extends React.Component {
  render() {
    return (
      <div>
        <Container fluid id="container">
          <h3>Refine Search</h3>

          {/* Date Filter */}
          <DropdownButton
            id="dropdown-basic-button"
            title="Date"
            className="date-dropdown"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          
          {/* Category Filter */}
          <DropdownButton
            id="dropdown-basic-button"
            title="Select Category"
            className="category-dropdown"
          >
            <Dropdown.Item href="#/action-1">Research Methods</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Research Outcomes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Software Engineering Methods
            </Dropdown.Item>
            <Dropdown.Item href="#/action-4">
              Software Engineering Practices
            </Dropdown.Item>
          </DropdownButton>

          {/* Sort by Filter */}
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort by"
            className="sort-dropdown"
          >
            <Dropdown.Item href="#/action-1">Author</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Title</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
      </Container>
        </div>
    );
  }
}
export default SearchFilter;
