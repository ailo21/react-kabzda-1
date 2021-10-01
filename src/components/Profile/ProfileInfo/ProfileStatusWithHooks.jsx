import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, stateEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {
        stateEditMode(true)
    }
    const  deActiveEditMode = () => {
        stateEditMode(false)
        props.updateStatus(status);
    }
    const  onStatusChange=(e)=>{
        debugger;
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {
                !editMode &&
                <div>
                    <div onDoubleClick={activateMode}>
                        {
                            props.status || <i>set a status message</i>
                        }</div>
                </div>
            }
            {
                editMode && <div>
                    <input type="text"
                           onBlur={deActiveEditMode}
                           onChange={onStatusChange}
                           value={status} />
                </div>
            }
        </div>
    )

}


export default ProfileStatusWithHooks;