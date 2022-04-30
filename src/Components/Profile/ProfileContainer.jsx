
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import {useParams} from 'react-router-dom';
import { userAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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
  }
  render() {

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let AuthRedirectComponent =withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile:state.profilePage.profile,
  isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));
