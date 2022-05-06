
import { connect } from 'react-redux';
import {getUsers, ChangeUserSubsctription, setCurrentPage, 
follow,unfollow } from '../../redux/users-reducer';
import { compose } from 'redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import { getUsersSlc,getPageSize,getTotalUsersCount,
  getCurrentPage,getIsFetching,getFollowingInProgress } from '../../redux/users-selector';




class UsersAPIComponent extends React.Component {


  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize);
  }
  onPageChanded = (currentPage) => {
 
    this.props.getUsers(currentPage,this.props.pageSize);
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
      followingInProgress={this.props.followingInProgress}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
    </>
  }
}

let mapStateToProps = (state) => {

  return {
    users: getUsersSlc(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress:getFollowingInProgress(state)
  }

}

export default compose(
  connect(mapStateToProps, 
    {ChangeUserSubsctription,follow,unfollow,
    setCurrentPage,getUsers
  })
)
(UsersAPIComponent);
