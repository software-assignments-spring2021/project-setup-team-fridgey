import { groups } from "./fridgeDataFake";

export let num;
export const itemCount = () => {
  num = 0;
  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups[i].category.length; j++) {
      num = num + 1;
    }
  }
  return num;
};
