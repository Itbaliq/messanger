
import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import {loginAccount } from '../../redux/auth-reducer';
import { compose } from 'redux';


class LoginContainer extends React.Component {
  render() {
    return (<Login {...this.props} />);
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,

  }

}
export default compose(
  connect(mapStateToProps, 
    {loginAccount})
)
(LoginContainer);