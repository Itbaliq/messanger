
import s from './Users.module.css';
import React from 'react';
import axios from 'axios';
import wojak from '../../assets/images/default_user.png';
const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").
        then(response => {
          props.setUsers(response.data.items);
        });

    }
  }
  return (<div>
    <button onClick={getUsers} >Update</button>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : wojak} />
          </div>
          <div>
            {
              u.followed ?
                <button onClick={() => { props.ChangeUserSubsctriptionAC(u.id) }} >Unfollow</button>
                : <button onClick={() => { props.ChangeUserSubsctriptionAC(u.id) }} >Follow</button>
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
