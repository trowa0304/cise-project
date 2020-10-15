import React from "react";
import { Table } from "react-bootstrap";

function unixToDate(unix)
{
    let date = new Date(unix);
    
    return date.toLocaleString("en-NZ", {timeZone: "Pacific/Auckland"});
}

class SubmitForm extends React.Component {    
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Date</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Pages</th>
                        <th scope="col">DOI</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.results.map((evidence) => 
                    (
                        <tr>
                            <td>{evidence.EvidenceID}</td>
                            <td>{evidence.EvidenceTitle}</td>
                            <td>{evidence.EvidenceAuthor}</td>
                            <td>{unixToDate(evidence.EvidenceDate)}</td>
                            <td>{evidence.EvidencePublisher}</td>
                            <td>{evidence.EvidenceVolume}</td>
                            <td>{evidence.EvidencePageNumbers}</td>
                            <td>{evidence.EvidenceDOI}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default SubmitForm;
