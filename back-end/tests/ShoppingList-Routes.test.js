// Import the dependencies for testing
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
const shopDataJSON = require("../../front-end/src/data/shoppingListMockData.json");
const shopData = Object.entries(shopDataJSON[0]);

// Configure chaid
chai.use(chaiHttp);
chai.should();

describe("Shopping List GET Route - basic functionality", () => {
  it("should return an array", (done) => {
    chai
      .request(app)
      .get("/shopData")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
  it("should grab Shopping List data from backend", (done) => {
    chai
      .request(app)
      .get("/shopData")
      .end((err, res) => {
        const expected = shopData;
        const actual = res.body;
        expect(actual).to.deep.equal(expected);
        done();
      });
  });
});

describe("Shopping List DELETE Route for specific item - basic functionality", () => {
  it("should return an array", (done) => {
    chai
      .request(app)
      .delete("/shopData/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
  // it("Deleted item should not be in fridgeData anymore", (done) => {
  //   chai
  //     .request(app)
  //     .delete("/fridgeData/1")
  //     .end((err, res) => {
  //       const id = "1";
  //       const expected = -1;
  //       for (let i = 0; i < res.body.length; i++) {
  //         const actual = res.body[i][1]
  //           .map(function (item) {
  //             return item.id.toString(); // Since id param is a string
  //           })
  //           .indexOf(id);
  //         expect(actual).to.deep.equal(expected);
  //       }
  //       done();
  //     });
  // });
});
