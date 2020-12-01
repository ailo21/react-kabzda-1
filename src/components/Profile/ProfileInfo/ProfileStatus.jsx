import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    toggleEditMode() {
        this.setState({
            editMode: (!this.state.editMode)
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} type="text" value={this.props.status}/>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
                        </div>
                }


            </div>
        )
    }


}

export default ProfileStatus;