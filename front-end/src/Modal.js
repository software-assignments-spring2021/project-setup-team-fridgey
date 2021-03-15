import React from 'react'

export const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Modal Title</h4>
                </div>
                <div className="modal-body">
                    This is the content
                </div>
                <div className="modal-footer">
                    <button className="button">Close</button>
                </div>
            </div>
        </div>
    )
}