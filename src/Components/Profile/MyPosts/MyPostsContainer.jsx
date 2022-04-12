
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import { connect } from 'react-redux';
import MyPosts from './MyPosts.jsx';

let mapStateToProps=(state)=>{
  return{
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    updateNewPostText:(text)=>{
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost:()=>{
      dispatch(addPostActionCreator());
    }

  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
