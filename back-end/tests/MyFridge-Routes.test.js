// Import the dependencies for testing
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
// import { itemCount } from "../../front-end/src/MyFridge/CountFridgeItems";
const fridgeDataJSON = require("../../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);

// Configure chaid
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

describe("fridgeData DELETE Route - basic functionality", () => {
  it("should return an array", (done) => {
    chai
      .request(app)
      .delete("/fridgeData/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
  //   it("fridgeData should have one less item", (done) => {
  //     chai
  //       .request(app)
  //       .delete("/fridgeData/1")
  //       .end((err, res) => {
  //         const expected = itemCount(fridgeData) - 1;
  //         const actual = itemCount(res.body);
  //         expect(actual).to.deep.equal(expected);
  //         done();
  //       });
  //   });
  it("Deleted item should not be in fridgeData anymore", (done) => {
    chai
      .request(app)
      .delete("/fridgeData/1")
      .end((err, res) => {
        const id = "1";
        const expected = -1;
        for (let i = 0; i < res.body.length; i++) {
          const actual = res.body[i][1]
            .map(function (item) {
              return item.id.toString(); // Since id param is a string
            })
            .indexOf(id);
          expect(actual).to.deep.equal(expected);
        }
        done();
      });
  });
});
