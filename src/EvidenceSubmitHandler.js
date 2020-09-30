const db = require("./DatabaseHandler");

class EvidenceSubmitHandler
{
    /**
     * Add new evidence to database
     * @param {string} author
     * @param {number} date 
     * @param {string} title 
     * @param {number} submitterID 
     * @param {string} publisher 
     * @param {string} volume 
     * @param {string} pageNumbers 
     * @param {string} doi 
     * @returns status - true if added sucessfully, false otherwise
     * @returns msg - output message
     */
    static AddEvidence(author, date, title, submitterID, publisher = "NULL", volume = "NULL", pageNumbers = "NULL", doi = "NULL")
    {
        let response = [];
        response["status"] = false;
        response["msg"] = "If you see this message, something is wrong with database, please check sys log.";
        
        db.query("INSERT INTO Evidences (EvidenceAuthor, EvidenceDate, EvidenceTitle, SubmitterID, EvidencePublisher, EvidenceVolume, EvidencePageNumbers, EvidenceDOI) VALUES " 
                + "('" + author + "', " + date + ", '" + title + "', " + submitterID + ", '" + publisher + "', '" + volume + "', '" + pageNumbers + "', '" + doi + "')", (err, results, fields) =>
        {
            if (err)
            {
                console.log(err);
                response["status"] = false;
                response["msg"] = "An error occured. Exception thrown: " + err;
                return response;
            }
            
            response["status"] = true;
            response["msg"] = "Successfully added new evidence";
        });
        
        return response;
    }
    
    /**
     * Get evidence info from given ID
     * @param {number} evidenceID ID of evidence to get
     * @return status - true if there is an evidence exists, false if an error occured or there is no evidence with given ID
     * @return msg - message output
     * @returns evidence - an array contains evidence info
     */
    static GetEvidence(evidenceID)
    {
        let response = [];
        response["status"] = false;
        response["msg"] = "If you see this message, something is wrong with database, please check sys log.";
        
        db.query("SELECT * FROM Evidences WHERE EvidenceID = " + evidenceID, (err, results, fields) =>
        {
            if (err)
            {
                console.log(err);
                response["status"] = false;
                response["msg"] = "An error occured. Exception thrown: " + err;
                return response;
            }
            
            if (results.length == 0)
            {
                response["status"] = false;
                response["msg"] = "Evidence with given ID not found";
            }
            else
            {
                response["status"] = true;
                response["msg"] = "Found evidence";
                response["evidence"] = results[0];
            }
        });
        
        return response;
    }
}

module.exports = EvidenceSubmitHandler;