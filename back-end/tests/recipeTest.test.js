const chai = require("chai");
const app = require("../app");
const axios = require("request");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

describe("Recipe", () => {
  describe("GET /getRecipe", () => {
    it("should get the recipe object", () => {
      chai
        .request(app)
        .get("/getRecipe")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
        });
    });
  });

  describe("POST /addIngredientToSL", () => {
    it("should post the name of the ingredient", () => {
      chai
        .request(app)
        .post("/addIngredientToSL")
        .send({ name: "apple" })
        .end(function (err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.have.property("name");
        });
    });
  });
});
