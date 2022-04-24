
import s from './Users.module.css';
import React from 'react';
import axios from 'axios';
import wojak from '../../assets/images/default_user.png';
import { render } from '@testing-library/react';
let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; (i <= pagesCount && i < 10); i++) {
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
            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : wojak} />
          </div>
          <div>
            {
              u.followed ?
                <button onClick={() => { props.ChangeUserSubsctription(u.id) }} >Unfollow</button>
                : <button onClick={() => { props.ChangeUserSubsctription(u.id) }} >Follow</button>
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
