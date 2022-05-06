import React from 'react';
import {  NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import {Formik, Form, Field} from "formik";
import { maxLengthCreator, required } from '../../utils/validators/validator';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {

  let addNewMessage = (values) => {
    props.sendMessage(values);

  }
  return (
    <Formik
      initialValues={{ newMessageBody: '' }}
      validate={values => {
        const errors = {};
        if(required(values.newMessageBody)){
        errors.newMessageBody =required(values.newMessageBody);
      }
      if(maxLengthCreator(30)(values.newMessageBody.length)){
        errors.newMessageBody = maxLengthCreator(30)(values.newMessageBody.length);
      }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
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
              type="newMessageBody"
              name="newMessageBody"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newMessageBody}
              placeholder="Enter message"
            />
          </div>
          <div className={s.error}>
            {errors.newMessageBody && touched.newMessageBody && errors.newMessageBody}
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}
export default Dialogs;
/*
    <Formik
      initialValues={{ newMessageBody: '' }}
      validate={values => {
        const errors = {};
        if(required(values.newMessageBody)){
        errors.newMessageBody =required(values.newMessageBody);
      }
      if(maxLengthCreator(10)(values.newMessageBody.length)){
        errors.newMessageBody = maxLengthCreator(10)(values.newMessageBody.length);
      }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
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
              type="newMessageBody"
              name="newMessageBody"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newMessageBody}
            />
          </div>
          <div className={s.error}>
            {errors.newMessageBody && touched.newMessageBody && errors.newMessageBody}
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Add Post
            </button>
          </div>
        </form>
      )}
    </Formik>
*/