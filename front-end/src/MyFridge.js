import React, { useState } from "react";
import "./MyFridge.css";
import { groups } from "./fridgeDataFake";
import { dot, chipDays, chipAmount } from "./itemColoring";
import Modal from "./deleteModal";

const MyFridge = (props) => {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("Hello");

  const renderItem = (data, j) => {
    const rowEvent = (event) => {
      const title = event.currentTarget.getAttribute("title");
      // https://stackoverflow.com/questions/43335452/pass-item-data-to-a-react-modal
      setItemName(title);
      setShow(true);
      // alert(title + "-" + amount + "-" + daysleft);
    };
    // dot, chipAmount, and chipDays can be found in itemColoring.js
    return (
      <tbody key={j}>
        <tr>
          <td
            title={data.title}
            amount={data.amount}
            daysleft={data.daysleft}
            onClick={rowEvent}
          >
            <span>{dot(data.daysleft)}</span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, data.daysleft)}</span>
            <span>{chipDays(data.daysleft)}</span>
          </td>
        </tr>
        <Modal onClose={() => setShow(false)} show={show} itemName={itemName} />
      </tbody>
    );
  };
  // groups is an object in fridgeDataFake.js
  return (
    <div>
      {groups.map((item, i) => (
        <div key={i}>
          <h2 className="header">{item.header}</h2>
          <table>{item.object.map(renderItem)}</table>
        </div>
      ))}
    </div>
  );
};

// make this available to other modules as an import
export default MyFridge;

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

// State for the Delete Modal

// ITEM COMPONENTS WITHOUT CSS CLASSES

/* <dot days={data.daysleft} /> */
/* <p class="chip"> {data.amount}</p> */
/* <p class="chip chip2"> {data.daysleft + " Days"}</p> */

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
        <td>{data.daysleft}</td> */

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
          {item.title} -- {item.amount} -- {item.daysleft} Days Left
        </p> */

// function test() {
//   // const [itemName1, setItemName1] = useState("Hello");
//   return (
//     <div>
//       <button onClick={() => setShow1(true)}> Show Modal</button>
//       <Modal onClose={() => setShow1(false)} show={show1} />
//     </div>
//   );
// }
