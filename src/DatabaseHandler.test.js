const chai = require("chai");
const expect = chai.expect;

const db = require("./DatabaseHandler");

describe("Test database connection", () =>
{
    it("Database pool variable test", () =>
    {
        expect(db).to.not.equal(null);
    });
    
    it("Database connection test", () =>
    {
        db.getConnection(function(err, connection) {
            expect(err).to.equal(null);
        });
    });
});