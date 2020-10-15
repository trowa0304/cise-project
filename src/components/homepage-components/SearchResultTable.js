import React from "react";
import SearchItem from './SearchItem';
import { Alert, Button, Container, Form, FormControl } from "react-bootstrap";

class SearchResultTable extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchResults: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        fetch("https://aut-cise-api.herokuapp.com/submitEvidence/" + encodeURIComponent(this.state.submitAuthor) + "&" + encodeURIComponent(this.state.submitPublishYear) + "&" + encodeURIComponent(this.state.submitTitle) + "&" + "1" + "&" + encodeURIComponent(this.state.submitPublisher) + "&" + encodeURIComponent(this.state.submitVolume) + "&" + encodeURIComponent(this.state.submitPageNumber) + "&" + encodeURIComponent(this.state.submitDOI))
        .then(response => response.json())
        .then(data => {
            if (data.status)
            {
                this.setState({alertBox: <Alert className="alert-success">Successfully added new evidence</Alert>});
                this.setState({searchResults: null});
            }
            else
            {
                this.setState({alertBox: <Alert className="alert-danger">Failed to add new evidence</Alert>});
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
                <h1>Search Result</h1>
                {this.state.alertBox}
                
                <table id="resultTable">
                    <thead>
                        
                    </thead>
                    <tbody id="resultsTableBody">
                    {this.state.news.map((item,i) =>
                    <div key={i}>
                    <SearchItem
                        title = {item.title}
                        author = {item.author}
                        date = {item.date}

                    />
                    </div>
                    )}
                    </tbody>
                </table>
            </Container>
        );
    }
}

export default SearchResultTable;
