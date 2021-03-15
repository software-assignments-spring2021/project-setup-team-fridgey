// each item in these categories has a title, amount (few, some, lots), and days left
const fruits = [
  {
    title: "Oranges",
    amount: "Few",
    daysLeft: 10,
  },
  {
    title: "Bananas",
    amount: "Some",
    daysLeft: 50,
  },
  {
    title: "Pears",
    amount: "Few",
    daysLeft: 0,
  },
  {
    title: "Pears",
    amount: "Lots",
    daysLeft: 0,
  },
];

const grains = [
  {
    title: "Apples",
    amount: "Some",
    daysLeft: "10",
  },
  {
    title: "Bananas",
    amount: "Some",
    daysLeft: "5",
  },
  {
    title: "Pears",
    amount: "Few",
    daysLeft: "0",
  },
];

const dairy = [
  {
    title: "Apples",
    amount: "Lots",
    daysLeft: "10",
  },
  {
    title: "Bananas",
    amount: "Some",
    daysLeft: "5",
  },
  {
    title: "Pears",
    amount: "Few",
    daysLeft: "0",
  },
];

const meats = [
  {
    title: "Apples",
    amount: "Lots",
    daysLeft: "10",
  },
  {
    title: "Bananas",
    amount: "Some",
    daysLeft: "5",
  },
  {
    title: "Pears",
    amount: "Few",
    daysLeft: "0",
  },
];

// exports the groups as an array of objects and their headers
export const groups = [
  {
    object: fruits,
    header: "Fruits",
  },
  {
    object: meats,
    header: "Meats",
  },
  {
    object: grains,
    header: "Grains",
  },
  {
    object: dairy,
    header: "Dairy",
  },
];

// const fridgeDataFake = [
//   (fruits = [
//     {
//       title: "Oranges",
//       amount: "Lots",
//       daysLeft: "10",
//     },
//     {
//       title: "Bananas",
//       amount: "Some",
//       daysLeft: "5",
//     },
//     {
//       title: "Pears",
//       amount: "Few",
//       daysLeft: "0",
//     },
//   ]),

// groups = [
//     {
//       object: fruits,
//       header: "Fruits",
//     },
//     {
//       object: meats,
//       header: "Meats",
//     },
//     {
//       object: grains,
//       header: "Grains",
//     },
//     {
//       object: dairy,
//       header: "Dairy",
//     },
//   ]

// // make this available to other modules as an import

// export default fridgeDataFake;
