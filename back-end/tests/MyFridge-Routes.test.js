// Import the dependencies for testing
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
const fridgeDataJSON = require("../../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const shopDataJSON = require("../../front-end/src/data/shoppingListMockData.json");
const shopData = Object.entries(shopDataJSON[0]);

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
  // it("should grab MyFridge data from backend", (done) => {
  //   chai
  //     .request(app)
  //     .get("/fridgeData")
  //     .end((err, res) => {
  //       const expected = fridgeData;
  //       const actual = res.body;
  //       expect(actual).to.deep.equal(expected);
  //       done();
  //     });
  // });
});

// describe("fridgeData DELETE Route - basic functionality", () => {
//   it("should return an array", (done) => {
//     chai
//       .request(app)
//       .delete("/fridgeData/1")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         done();
//       });
//   });
//   it("Deleted item should not be in fridgeData anymore", (done) => {
//     chai
//       .request(app)
//       .delete("/fridgeData/1")
//       .end((err, res) => {
//         const id = "1";
//         const expected = -1;
//         for (let i = 0; i < res.body.length; i++) {
//           const actual = res.body[i][1]
//             .map(function (item) {
//               return item.id.toString(); // Since id param is a string
//             })
//             .indexOf(id);
//           expect(actual).to.deep.equal(expected);
//         }
//         done();
//       });
//   });
// });

// describe("fridgeData POST Route - basic functionality", () => {
//   it("should edit an item", (done) => {
//     chai
//       .request(app)
//       .post("/fridgeData/postRoute")
//       .send({ amount: "Some", type: 0, id: 1, useWithin: 10, notes: "" })
//       .end((err, res) => {
//         res.body[0][1][0].amount = "Some";
//         res.body[0][1][0].useWithin = 10;
//         res.body[0][1][0].notes = "";
//         expect(res.body[0][1][0].amount).to.equal("Some");
//         expect(res.body[0][1][0].useWithin).to.equal(10);
//         expect(res.body[0][1][0].notes).to.equal("");
//       });

//     done();
//   });
// });

// describe("fridgeData POST Route - basic functionality", () => {
//   it("should add an item to shopping list", (done) => {
//     chai
//       .request(app)
//       .post("/fridgeData/addItem")
//       .send({
//         id: 1,
//         title: "Apples",
//         amount: "Some",
//         type: 0,
//         dateAdded: "February 20, 2021",
//       })
//       .end((err, res) => {
//         shopData[0][1].push({
//           id: 4,
//           title: "Apples",
//           amount: "Some",
//           type: 0,
//           dateAdded: "February 20, 2021",
//         });
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         expect(shopData[0][1][3].title).to.equal("Apples");
//       });

//     done();
//   });
// });

// import { itemCount } from "../../front-end/src/MyFridge/CountFridgeItems";

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
