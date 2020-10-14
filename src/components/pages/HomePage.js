import React from "react";
import SearchBar from "../homepage-components/SearchBar";
import SearchFilter from "../homepage-components/SearchFilter";
import SearchButton from "../homepage-components/SearchButton";
import { Container } from "react-bootstrap";

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <SearchBar />
                <SearchFilter />
                <SearchButton />

            </div>
        );
    }
}
export default HomePage;
