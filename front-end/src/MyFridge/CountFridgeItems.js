import { groups } from "../data/fridgeDataFake";
const fridgeData = require("../data/fridgeMockData.json");
export let num;
export const itemCount = () => {
  num = 0;
  for (let i = 0; i < Object.entries(fridgeData[0]).length; i++) {
    for (let j = 0; j < Object.entries(fridgeData[0])[i][1].length; j++) {
      num = num + 1;
    }
  }
  return num;
};
