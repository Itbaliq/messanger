import s from './ProfileStatus.module.css';
import React, { Component } from 'react';


class ProfileStatus extends React.Component {
  statusInputRef = React.createRef();
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })

  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.state.status
      });
    }
  }

  render() {
    return (
      <div>
        <div>Status:</div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "Empty status"} </span>
          </div>}
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>}
      </div>
    )
  };
}

export default ProfileStatus;
