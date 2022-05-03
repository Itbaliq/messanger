
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import {useParams} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId ;
    if(!userId){
      userId=2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} 
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile:state.profilePage.profile,
  status:state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
  withRouter,
  withAuthRedirect
)
(ProfileContainer);
