import React from "react";
import "./SearchFilter.css";
import { Dropdown, DropdownButton, Container, FormControl } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchFilter extends React.Component {
    constructor()
    {
        super();
        
        this.state = {
            startDate: new Date(0).getTime(),
            endDate: new Date().getTime()
        }
        
        this.handleDate = this.handleDate.bind(this);
    }
    
    handleDate(event)
    {
        if (event.target.name === "startDate")
        {
            this.setState({startDate: new Date(event.target.value).getTime()}, () => this.props.dateLimitHandle(this.state.startDate, this.state.endDate));
        }
        else if (event.target.name === "endDate")
        {
            this.setState({endDate: new Date(event.target.value).getTime()}, () => this.props.dateLimitHandle(this.state.startDate, this.state.endDate));
        }
    }
    
    render() {
        return (
            <div>
                <Container fluid id="container">
                    <h4 className="fil">Refine Search</h4>
                    {/* Date Filter */}
                    <div>

                    </div>
                    {/* Category Filter */}
                    <DropdownButton id="dropdown-basic-button" title="Select Category" className="category-dropdown">
                        <Dropdown.Item href="#/action-1">Research Methods</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Research Outcomes</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Software Engineering Methods</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Software Engineering Practices</Dropdown.Item>
                    </DropdownButton>

                    {/* Sort by Filter */}
                    <DropdownButton id="dropdown-basic-button" className="sort-dropdown" title="Sort by">
                        <Dropdown.Item onClick={this.props.sortByHandle('ID')}>ID</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.sortByHandle('Title')}>Title</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.sortByHandle('Author')}>Author</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.sortByHandle('Date')}>Date</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.sortByHandle('DOI')}>DOI</Dropdown.Item>
                    </DropdownButton>

                    <div className="form-inline">
                        From: <FormControl type="date" className="mx-3" name="startDate" onChange={this.handleDate} />
                        To: <FormControl type="date" className="ml-3" name="endDate" onChange={this.handleDate} />
                    </div>
                </Container>
            </div>
        );
    }
}
export default SearchFilter;
