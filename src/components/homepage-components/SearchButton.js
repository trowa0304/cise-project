import React from "react";
import "./SearchButton.css";
import { Button } from "react-bootstrap";

class SearchButton extends React.Component {
  render() {
    return (
        <Button type="submit" className="button-style">Search</Button>
    );
  }
}

export default SearchButton;
