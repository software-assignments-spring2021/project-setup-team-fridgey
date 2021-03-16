import { Divider } from '@material-ui/core'
import React from 'react'
import './EditStoragePopup.css'

const EditStoragePopup = (props) => {
    return(props.trigger) ? (
        <div className = "storagePopup">
            <div className = "storagePopupInner">
                <button className = "closeStoragePopup" onClick = {() => props.setTrigger(false)}>close</button>
                { props.children}
            </div>
        </div>
    ) : "";
}

export default EditStoragePopup

//- proper line
//- functional close button
//- proper sizing and putting lines on top of each other
//- spacing in the appropriate times between words/lines
//- functional popup button with greyed out background