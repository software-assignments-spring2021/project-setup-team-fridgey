// import chai from "chai";
// import { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from "../app";

// chai.use(chaiHttp);
// chai.should();

// describe("Storage Time Search List Groups - Basic Functionality", function () {
//   this.timeout(15000); //using a manual timeout because data from mockaroo takes too long

//   it("Spoil time should be in increasing order of shorter, average, longer", (done) => {
//     this.timeout(15000);
//     chai
//       .request(app)
//       .get("/storagetimesearchlistfruits")
//       .end((err, res) => {
//         res.body = JSON.parse(res.text); //without this, res.body is an empty array
//         for (let i = 0; i < res.body.length; i++) {
//           expect(res.body[i].longTime).to.be.above(res.body[i].averageTime);
//           expect(res.body[i].longTime).to.be.above(res.body[i].shortTime);
//           expect(res.body[i].averageTime).to.be.above(res.body[i].shortTime);
//         }
//         done();
//       });
//   });
// });
