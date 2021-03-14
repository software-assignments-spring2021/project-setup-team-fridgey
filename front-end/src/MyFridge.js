import React from "react";
import "./MyFridge.css";
import * as ReactBootStrap from "react-bootstrap";
import { groups } from "./fridgeDataFake";
import { dot, chipDays, chipAmount } from "./itemColoring";

const MyFridge = (props) => {
  const renderItem = (data) => {
    return (
      <tr>
        <td>
          <span>{dot(data.daysLeft)}</span>
          <span class="title">{data.title}</span>
          <span>{chipAmount(data.amount)}</span>
          <span>{chipDays(data.daysLeft)}</span>
        </td>
      </tr>
    );
  };

  return (
    <div>
      {groups.map((item) => (
        <div>
          <h2 className="header">{item.header}</h2>
          <table>{item.object.map(renderItem)}</table>
        </div>
      ))}
    </div>
  );
};

// make this available to other modules as an import
export default MyFridge;

// ITEM COMPONENTS WITHOUT CSS CLASSES

/* <dot days={data.daysLeft} /> */
/* <p class="chip"> {data.amount}</p> */
/* <p class="chip chip2"> {data.daysLeft + " Days"}</p> */

// const getDot = (days) => {
//   if (days < 2) {
//     return <span class="dot dotRed"></span>;
//   } else if (days >= 2 && days < 6) {
//     return <span class="dot dotYellow"></span>;
//   } else {
//     return <span class="dot dotGreen"></span>;
//   }
// };

/*
        <List className="List" a={item.object.map(renderItem)}>
            { <h2 class="header">{item.header}</h2>
          <tbody>{item.object.map(renderItem)}</tbody>}
          </List>
*/
/* <td className="amountChip">{data.amount}</td>
        <td>{data.daysLeft}</td> */

/* <div>
{groups.map((item) => (
  <ReactBootStrap.Table hover size="sm">
    <h2 class="header">{item.header}</h2>
    <tbody>{item.object.map(renderItem)}</tbody>
  </ReactBootStrap.Table>
))}
</div> */

/* <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Storage Time</th>
        </tr> */

/* {itemData.map((item) => (
        <p>
          {item.title} -- {item.amount} -- {item.daysLeft} Days Left
        </p> */
