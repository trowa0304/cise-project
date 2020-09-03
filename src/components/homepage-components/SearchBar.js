import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <h1 id="heading">SEER</h1>

        <input type="text" placeholder="Search" name="Search" className="extendedbar"></input>
      </div>
    );
  }
}
export default SearchBar;
