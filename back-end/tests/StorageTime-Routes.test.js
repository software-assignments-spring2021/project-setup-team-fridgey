import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";

const data = [
  {
    id: 1,
    food: "Carbonated Water - Wildberry",
    storage_time_short: 1,
    storage_time_medium: 1.5,
    storage_time_long: 2,
    category: 2,
  },
  {
    id: 2,
    food: "Rye Special Old",
    storage_time_short: 20,
    storage_time_medium: 30,
    storage_time_long: 40,
    category: 3,
  },
  {
    id: 3,
    food: "Bread - Bagels, Plain",
    storage_time_short: 37,
    storage_time_medium: 55.5,
    storage_time_long: 74,
    category: 1,
  },
  {
    id: 4,
    food: "Mix Pina Colada",
    storage_time_short: 1,
    storage_time_medium: 1.5,
    storage_time_long: 2,
    category: 3,
  },
  {
    id: 5,
    food: "Bread - White, Unsliced",
    storage_time_short: 29,
    storage_time_medium: 43.5,
    storage_time_long: 58,
    category: 1,
  },
  {
    id: 6,
    food: "Beef - Tenderloin Tails",
    storage_time_short: 15,
    storage_time_medium: 22.5,
    storage_time_long: 30,
    category: 1,
  },
];

chai.use(chaiHttp);
chai.should();

describe("Storage Time Data GET Route - Basic Functionality", () => {
  it("Return an array", (done) => {
    chai
      .request(app)
      .get("/storagetimeitems")
      .end((err, res) => {
        res.body.should.be.a("array");
        done();
     });
  });
  it("Return correct data", (done) => {
    chai
      .request(app)
      .get("/storagetimeitems")
      .end((err, res) => {
        const expected = data;
        const actual = res.body;
        expect(actual).to.deep.equal(expected);
        done();
      });
  });
});