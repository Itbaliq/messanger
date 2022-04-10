
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p =><Post message={p.message} likescount={p.likescount} />);
  let newPostElement= React.createRef();
  let addPost=()=>{
    props.dispatch(addPostActionCreator());
  }
  let onPostChange=()=>{
    let text=newPostElement.current.value;
    let action=updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>

      </div>
      <div>
        New post
      </div>
      {postsElements}
      <div>
        2 post
      </div>
    </div>
  );
}

export default MyPosts;
