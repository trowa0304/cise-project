import React from "react";
import { FormControl, FormGroup } from "react-bootstrap";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props)
    {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1 className="foo" id="heading">SEER</h1>
                <FormGroup>
                    <FormControl type="text" name="searchQuery" onChange={this.props.onChange}></FormControl>
                </FormGroup>
            </div>
        );
    }
}
export default SearchBar;
