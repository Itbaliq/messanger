
import { connect } from 'react-redux';
import { ChangeUserSubsctription, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';

import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader';

class UsersAPIComponent extends React.Component {


  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
      then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanded = (currentPage) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).
      then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
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
  setCurrentPage,setTotalUsersCount,toggleIsFetching
})(UsersAPIComponent);

export default UsersContainer;
