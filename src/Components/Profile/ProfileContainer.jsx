
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { useMatch,useParams,useLocation,useNavigate } from 'react-router-dom';

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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`). 
      then(response => {

        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  profile:state.profilePage.profile
})



export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
