
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field } from "formik";
import { required, maxLengthCreator } from '../../../utils/validators/validator';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likescount} />);
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <AddPostForm addPost={props.addPost} />
      {postsElements}
    </div>
  );
}


const AddPostForm = (props) => {

  let addNewPost = (values) => {
    props.addPost(values);

  }

  return (
    <Formik
      initialValues={{ newPostElement: '' }}
      validate={values => {
        const errors = {};
        if(required(values.newPostElement)){
        errors.newPostElement =required(values.newPostElement);
      }
      if(maxLengthCreator(10)(values.newPostElement.length)){
        errors.newPostElement = maxLengthCreator(10)(values.newPostElement.length);
      }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newPostElement);
        resetForm({ values: '' });
      }
      }
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              type="newPostElement"
              name="newPostElement"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPostElement}
              placeholder="Add post"
            />
          </div>
          <div className={s.error}>
            {errors.newPostElement && touched.newPostElement && errors.newPostElement}
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Add Post
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}


export default MyPosts;
/*
const AddPostForm = (props) => {

  let addNewPost = (values) => {
    props.addPost(values);
    
  }

  return (
    <Formik
      initialValues={{
        newPostElement: ""
      }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newPostElement);
        resetForm({ values: '' });
      }
      }
    >
      {() => (
        
        <Form>
          <div>
            <Field
              name={'newPostElement'}
              as={Textarea}
              placeholder={'Add post'}
              validate={[required,maxLength10]}
            />
          </div>

          <button type={'submit'}>Add Post</button>
        </Form>
      )}
    </Formik>
  )
}
const Basic = () => (
  
  <div>
    <Formik
      initialValues={{ newPostElement: '' }}
      validate={values => {
        const errors = {};
        if (!values.newPostElement) {
          errors.newPostElement = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addNewPost(values.newPostElement);
        resetForm({ values: '' });
      }
      }
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
          <input
            type="newPostElement"
            name="newPostElement"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.newPostElement}
          />
          </div>
          <div>
          {errors.newPostElement && touched.newPostElement && errors.newPostElement}
          </div>
          <div>
          <button type="submit" disabled={isSubmitting}>
           Add Post
          </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);
*/