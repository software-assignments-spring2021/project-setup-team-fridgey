import React from "react";
import "./MyFridge.css";
import { groups } from "./fridgeDataFake";
import { dot, chipDays, chipAmount } from "./itemColoring";

const MyFridge = (props) => {
  const renderItem = (data) => {
    // const [popUpInfo, setPopUpInfo] = useState(0);
    // const [showPopUp, setShowPopUp] = useState(false);

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // // const rowEvents = {
    // //   onClick: () => {
    // //     console.log("hi");
    // //   },
    // // };

    // const toggleTF = () => {
    //   setShowPopUp(handleShow)
    // }

    const rowEvent = (a) => {
      const title = a.target.getAttribute("title");
      const amount = a.target.getAttribute("amount");
      const daysLeft = a.target.getAttribute("daysLeft");
      alert(title + "-" + amount + "-" + daysLeft);
    };
    // dot, chipAmount, and chipDays can be found in itemColoring.js
    return (
      <tr>
        <td
          title={data.title}
          amount={data.amount}
          daysLeft={data.daysLeft}
          onClick={rowEvent}
        >
          <span key={data.daysLeft}>{dot(data.daysLeft)}</span>
          <span className="title">{data.title}</span>
          <span key={data.amount}>{chipAmount(data.amount)}</span>
          <span key={data.daysLeft}>{chipDays(data.daysLeft)}</span>
          {/* <span> <button onC></button> </span> */}
        </td>
      </tr>
    );
  };
  // groups is an object in fridgeDataFake.js
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
