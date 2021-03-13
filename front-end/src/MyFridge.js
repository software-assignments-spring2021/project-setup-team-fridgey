import React from "react";
import "./MyFridge.css";
import * as ReactBootStrap from "react-bootstrap";
import { groups } from "./fridgeDataFake";
import List from "./list";

const MyFridge = (props) => {
  const renderItem = (data) => {
    return (
      <tr>
        <td>{data.title}</td>
        <td className="amountChip">{data.amount}</td>
        <td>{data.daysLeft}</td>
      </tr>
    );
  };

  return (
    <div>
      {groups.map((item) => (
        <div>
          <ReactBootStrap.Table hover size="sm">
            <h2 class="header">{item.header}</h2>
            <tbody>{item.object.map(renderItem)}</tbody>
          </ReactBootStrap.Table>
        </div>
        // <List a={groups.header} b="text2" c="text3">
        //   {/* <h2 class="header">{item.header}</h2>
        //   <tbody>{item.object.map(renderItem)}</tbody> */}
        // </List>
        // <h2>{groups.header}</h2>
      ))}
    </div>
  );
};

// make this available to other modules as an import
export default MyFridge;

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
