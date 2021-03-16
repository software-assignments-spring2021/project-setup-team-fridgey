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