import React from "react";
import SearchBar from "../homepage-components/SearchBar";
import SearchFilter from "../homepage-components/SearchFilter";
import SearchButton from "../homepage-components/SearchButton";
import SearchResultTable from "../homepage-components/SearchResultTable";
import { Alert, Container, Form } from "react-bootstrap";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            results: [],
            sortedResults: [],
            alertBox: <Alert className="alert-primary">Please fill in the form</Alert>
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDateLimit = this.handleDateLimit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({ alertBox: <Alert className="alert-secondary">Loading</Alert>});

        fetch("https://aut-cise-api.herokuapp.com/search/" + encodeURIComponent(this.state.searchQuery))
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    this.setState({ alertBox: <Alert className="alert-success">{data.msg}</Alert>, results: data.evidences, sortedResults: data.evidences });
                }
                else {
                    this.setState({ alertBox: <Alert className="alert-danger">{data.msg}</Alert> });
                }
            });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value ?? "NULL";
        const name = target.name;
        this.setState({ [name]: value });
    }
    
    handleSort(text)
    {
        this.state.sortedResults = this.state.results;
        
        switch (text)
        {
            case "ID":
                this.state.sortedResults.sort((a, b) => a.EvidenceID - b.EvidenceID);
                break;
            case "Title":
                this.state.sortedResults.sort((a, b) => 
                {
                    let aT = a.EvidenceTitle.toLowerCase(), bT = b.EvidenceTitle.toLowerCase();
                    
                    if (aT < bT) return -1;
                    else if (aT > bT) return 1;
                    else return 0;
                });
                break;
            case "Author":
                this.state.sortedResults.sort((a, b) => 
                {
                    let aT = a.EvidenceAuthor.toLowerCase(), bT = b.EvidenceAuthor.toLowerCase();
                    
                    if (aT < bT) return -1;
                    else if (aT > bT) return 1;
                    else return 0;
                });
                break;
            case "Date":
                this.state.sortedResults.sort((a, b) => a.EvidenceDate - b.EvidenceDate);
                break;
            case "DOI":
                this.state.sortedResults.sort((a, b) => 
                {
                    let aT = a.EvidenceDOI.toLowerCase(), bT = b.EvidenceDOI.toLowerCase();
                    
                    if (aT < bT) return -1;
                    else if (aT > bT) return 1;
                    else return 0;
                });
                break;
        }
    }
    
    handleDateLimit(startDate, endDate)
    {
        this.setState({sortedResults: []}, () => {
            console.log(startDate, endDate);
            
            let tmpEntries = [];
            
            this.state.results.forEach(entry => {
                console.log(entry.EvidenceDate >= startDate && entry.EvidenceDate <= endDate);
                if (entry.EvidenceDate >= startDate && entry.EvidenceDate <= endDate)
                {
                    tmpEntries.push(entry);
                }
            });
            
            this.setState({sortedResults: tmpEntries});
        });
    }
    
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <SearchBar onChange={this.handleChange}/>
                    <SearchFilter sortByHandle={this.handleSort} dateLimitHandle={this.handleDateLimit}/>
                    <SearchButton />
                </Form>
                <div className="mt-3">{this.state.alertBox}</div>
                <SearchResultTable results={this.state.sortedResults}></SearchResultTable>
            </Container>
        );
    }
}
export default HomePage;
