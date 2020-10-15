import React from "react";
import "./SearchFilter.css";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchFilter extends React.Component {
  state = {
    startDate: new Date(),
    dropDownValue: "Sort by"
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  changeValue(text) {
    this.setState({ dropDownValue: text })
}

  render() {
    return (
      <div>
        <Container fluid id="container">
          <h4 className="fil"  >Refine Search</h4>
          {/* Date Filter */}
          <div>

          </div>
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
                        className="sort-dropdown"
                        title={this.state.dropDownValue}
                    >
                        <Dropdown.Item onClick={() => this.changeValue('Author')}>Author</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.changeValue('Title')}>Title</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.changeValue('Date')}>Date</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.changeValue('DOI')}>DOI</Dropdown.Item>
          </DropdownButton>

          Date: <DatePicker className="date" selected={this.state.startDate} onChange={this.handleChange}/>
        </Container>
      </div>
    );
  }
}
export default SearchFilter;
