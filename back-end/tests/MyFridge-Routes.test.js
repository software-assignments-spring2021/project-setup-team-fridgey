// Import the dependencies for testing
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
const fridgeDataJSON = require("../../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("fridgeData GET Route - basic functionality", () => {
  it("should return an array", (done) => {
    chai
      .request(app)
      .get("/fridgeData")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
  it("should grab MyFridge data from backend", (done) => {
    chai
      .request(app)
      .get("/fridgeData")
      .end((err, res) => {
        const expected = fridgeData;
        const actual = res.body;
        expect(actual).to.deep.equal(expected);
        done();
      });
  });
});
