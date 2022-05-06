
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { connect } from 'formik';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Preloader from './Components/common/Preloader';

const App = (props) => {


    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path={'/profile'}
              element={
                <ProfileContainer />} >
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route exact path="/dialogs"
              element={
                <DialogsContainer />} />
            <Route exact path="/users"
              element={
                <UsersContainer />} />
            <Route exact path="/login"
              element={
                <LoginContainer />} />
          </Routes>
        </div>

      </div>
    );
  }


export default App;

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
  let mapStateToProps = (state) => ({
    initialized: state.app.initialized
  })
  /* 
  let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
  export default compose(
    connect(mapStateToProps, { initializeApp }),
    withRouter)
    (App)
  */