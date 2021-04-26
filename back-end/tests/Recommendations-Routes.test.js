// // Import the dependencies for testing
// import chai from "chai";
// import { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from "../app";
// const recsRoute = require("../../front-end/src/data/mock_recipes.json");
// const item =
//     {
//         "name": "Crock Pot Roast",
//         "ingredients": [
//             {
//                 "quantity": "1",
//                 "name": " beef roast",
//                 "type": "Meat"
//             },
//             {
//                 "quantity": "1 package",
//                 "name": "brown gravy mix",
//                 "type": "Baking"
//             },
//             {
//                 "quantity": "1 package",
//                 "name": "dried Italian salad dressing mix",
//                 "type": "Condiments"
//             },
//             {
//                 "quantity": "1 package",
//                 "name": "dry ranch dressing mix",
//                 "type": "Condiments"
//             },
//             {
//                 "quantity": "1/2 cup",
//                 "name": "water",
//                 "type": "Drinks"
//             }
//         ],
//         "steps": [
//             "Place beef roast in crock pot.",
//             "Mix the dried mixes together in a bowl and sprinkle over the roast.",
//             "Pour the water around the roast.",
//             "Cook on low for 7-9 hours."
//         ],
//         "time": [
//             10
//         ],
//         "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
//         "originalURL": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
//     }

// // Configure chaid
// chai.use(chaiHttp);
// chai.should();

// describe("Recommendations GET Routes - basic functionality", () => {
//   it("RecipesOfTheDay should return an array", (done) => {
//     chai
//       .request(app)
//       .get("/Recommendations/RecipesOfTheDay")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         done();
//       });
//   });
//   it("RecipesOfTheDay should grab recs data from backend", (done) => {
//     chai
//       .request(app)
//       .get("/Recommendations/RecipesOfTheDay")
//       .end((err, res) => {
//         const expected = recsRoute;
//         const actual = res.body;
//         expect(actual).to.deep.equal(expected);
//         done();
//       });
//   });
//   it("ReadyToMake should return an array", (done) => {
//     chai
//       .request(app)
//       .get("/Recommendations/ReadyToMake")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         done();
//       });
//   });
//   it("ReadyToMake should grab recs data from backend", (done) => {
//     chai
//       .request(app)
//       .get("/Recommendations/ReadyToMake")
//       .end((err, res) => {
//         const expected = recsRoute;
//         const actual = res.body;
//         expect(actual).to.deep.equal(expected);
//         done();
//       });
//   });
//   it("SavedRecipes should return an array", (done) => {
//     chai
//       .request(app)
//       .get("/Recommendations/SavedRecipes")
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         done();
//       });
//   });
// });

// function containsKey(data,key){
//     var count = 0;
//     for(var dataItem in data)
//     {
//         if(JSON.stringify(data[dataItem]) == JSON.stringify(key))
//             return true;
//         count++;
//     }
//     return false;
// }

// describe("Recommendations POST Route - basic functionality", () => {
//   it("SaveRecipe should return an array", (done) => {
//     chai
//       .request(app)
//       .post("/Recommendations/SaveRecipe")
//       .send(item)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a("array");
//         done();
//       });
//   });
//   it("Saved Recipe should be in SavedRecipes array", (done) => {
//     chai
//       .request(app)
//       .post("/Recommendations/SaveRecipe")
//       .end((err, res) => {
//         expect(containsKey(res.body,item)).to.be.true;
//         done();
//       });
//   });
//   it("Removed Recipe should not be in recipeData anymore", (done) => {
//     chai
//       .request(app)
//       .post("/Recommendations/RemoveRecipe")
//       .send(item)
//       .end((err, res) => {
//         expect(containsKey(res.body,item)).to.be.false;
//         done();
//       });
//   });
// });
