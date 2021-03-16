import React from "react"
import { dot, chipDays, chipAmount } from "./itemColoring";
import "./MyFridge.css";

const Item = (props) => {
    return (
        // elements for the table
        <tr>
            <td>
                {/* we will use the functions from itemColoring */}
                {/* and the css from MyFridge.css */}
                <span>{dot(props.food.daysLeft)}</span>
                <span className="title">{props.food.title}</span>
                <span>{chipAmount(props.food.amount)}</span>
                <span>{chipDays(props.food.daysLeft)}</span>
            </td>
        </tr>
    )
}

export default Item