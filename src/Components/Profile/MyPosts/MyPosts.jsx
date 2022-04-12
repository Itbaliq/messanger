
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p =><Post message={p.message} likescount={p.likescount} />);
  let newPostElement= React.createRef();
  let onAddPost=()=>{
    props.addPost();
  }
  let onPostChange=()=>{
    let text=newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>

      </div>
      <div>
        New post
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
