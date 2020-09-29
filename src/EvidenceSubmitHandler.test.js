const chai = require("chai");
const expect = chai.expect;

const evidenceSubmitHandler = require("./EvidenceSubmitHandler");

describe("Test evidence submit handler", () =>
{
    it("Test get evidence ID 0, must return false", () =>
    {
        let evidence = evidenceSubmitHandler.GetEvidence(0);
        
        expect(evidence.status).to.equal(false);
    });
});