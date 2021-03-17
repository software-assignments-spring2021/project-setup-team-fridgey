import { Divider } from '@material-ui/core'
import React from 'react'
import './EditStoragePopup.css'

const EditStorageModal = (props) => {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                    This is modal content
                </div>
                <div className="modal-footer">
                    <button className="close-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default EditStorageModal

//- proper line
//- functional close button
//- proper sizing and putting lines on top of each other
//- spacing in the appropriate times between words/lines
//- functional popup button with greyed out background