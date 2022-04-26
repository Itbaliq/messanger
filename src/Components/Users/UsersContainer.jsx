
import { connect } from 'react-redux';
import { ChangeUserSubsctription, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching,toggleFollowingInProgress } from '../../redux/users-reducer';

import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader';
import {userAPI} from '../../api/api';


class UsersAPIComponent extends React.Component {


  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI.getUsers(this.props.currentPage,this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanded = (currentPage) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    userAPI.getUsers(currentPage,this.props.pageSize)
    .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  }


  render() {
    return <>
    {this.props.isFetching ? <Preloader/> : null}
    <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanded={this.onPageChanded}
      users={this.props.users}
      ChangeUserSubsctription={this.props.ChangeUserSubsctription}
      toggleFollowingInProgress={this.props.toggleFollowingInProgress}
      followingInProgress={this.props.followingInProgress}

    />
    </>
  }
}

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress,
  }

}
/*
let mapDispatchToProps = (dispatch) => {
  return {
    ChangeUserSubsctriptionAC: (userId) => {
      dispatch(ChangeUserSubsctriptionAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  }
}
*/

const UsersContainer = connect(mapStateToProps, {ChangeUserSubsctription,setUsers,
  setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFollowingInProgress
})(UsersAPIComponent);

export default UsersContainer;
