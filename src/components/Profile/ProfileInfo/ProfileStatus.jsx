import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status!==this.props.status){
            this.setState(
                {status:this.props.status}
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActiveEditMode}
                                   type="text" value={this.state.status}/>
                        </div>
                        :
                        <div>
                            <div onDoubleClick={this.activeEditMode}>
                                {
                                    this.props.status || <i>set a status message</i>
                                }</div>
                        </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;