import React from "react";

const List = (props) => {
  //   const a = a;
  //   const b = b;
  //   const c = c;
  //   const { a, b, c } = props;
  return (
    <tr>
      <td>{props.a}</td>
      <td>{props.b}</td>
      <td>{props.c}</td>
    </tr>
  );
};

export default List;
