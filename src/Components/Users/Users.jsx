
import s from './Users.module.css';
import React from 'react';
import axios from 'axios';
import wojak from '../../assets/images/default_user.png';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
const Max_pages=10;

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; (i <= pagesCount && i < Max_pages); i++) {
    pages.push(i);
  };
  return (<div>
    <div>
      {
        pages.map(p => {
          return (<span className={props.currentPage === p && s.selectedPage}
            onClick={() => { props.onPageChanded(p) }}>{p}</span>)
        }
        )}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink  to={'./../profile/' + u.id} >
            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : wojak} />
            </NavLink>
          </div>
          <div>
            {
              u.followed ?
                <button disabled={props.followingInProgress} onClick={() => {
                  props.toggleFollowingInProgress(true);
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                  {
                    withCredentials:true,
                    headers:{
                      "API-KEY":"720135bb-8ef1-4867-bfdd-0542088a0b59"
                    }
                  }).
                  then(response => {
                    if(response.resultCode==0){
                      props.ChangeUserSubsctription(u.id);
                    }
                    props.toggleFollowingInProgress(false);
                  }); 
                }} >Unfollow</button>
                : <button disabled={props.followingInProgress} onClick={() => { 
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                  {
                    withCredentials:true,
                    headers:{
                      "API-KEY":"720135bb-8ef1-4867-bfdd-0542088a0b59"
                    }
                  }).
                  then(response => {
                    if(response.resultCode==0){
                      props.ChangeUserSubsctription(u.id);
                    }
                  }); 
                }} >Follow</button>
            }
            <button onClick={() => { alert(u.followed) }} >Check status</button>
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.city"}</div>
            <div>{"u.location.country"}</div>
          </span>
        </span>
      </div>
      )
    }
  </div>
  );

}

export default Users;
