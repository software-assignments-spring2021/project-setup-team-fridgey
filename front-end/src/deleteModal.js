import React from "react";
import "./deleteModal.css";

const Modal = (props) => {
  //   if (props.show === false) {
  //     return null;
  //   } else {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Delete Item Confirmation</h4>
        </div>
        <div className="modal-body">
          Are You Sure You Want to Delete {props.itemName}?
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Delete
          </button>
          <button onClick={props.onClose} className="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
  //   }
};

export default Modal;

// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
// import "./Modal.css";

// const Modal = props => {
//   const closeOnEscapeKeyDown = e => {
//     if ((e.charCode || e.keyCode) === 27) {
//       props.onClose();
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
//     return function cleanup() {
//       document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
//     };
//   }, []);

//   return ReactDOM.createPortal(
//     <CSSTransition
//       in={props.show}
//       unmountOnExit
//       timeout={{ enter: 0, exit: 300 }}
//     >
//       <div className="modal" onClick={props.onClose}>
//         <div className="modal-content" onClick={e => e.stopPropagation()}>
//           <div className="modal-header">
//             <h4 className="modal-title">{props.title}</h4>
//           </div>
//           <div className="modal-body">{props.children}</div>
//           <div className="modal-footer">
//             <button onClick={props.onClose} className="button">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </CSSTransition>,
//     document.getElementById("root")
//   );
// };

// export default Modal;
