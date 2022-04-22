
import s from './Users.module.css';
import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { ChangeUserSubsctriptionAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps=(state)=>{

  return{
    users:state.usersPage.users
  }

}

let mapDispatchToProps=(dispatch)=>{
  return{
    ChangeUserSubsctriptionAC:(userId) =>{
      dispatch(ChangeUserSubsctriptionAC(userId));
    },
    setUsers:(users) =>{
      dispatch(setUsersAC(users));
    }

  }
}

const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;
