import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer.js';
import s from './Dialogs.module.css';

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


  let state=props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d =><DialogsItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m =><Message message={m.message} />);
  let newMessageBody=state.newMessageBody;
  
  let onSendMessageClick=()=>{
    props.store.dispatch(sendMessageCreator());
  }
  let onSendMessageChange=(e)=>{

    let body=e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessageBody} 
                      onChange={onSendMessageChange}
                      placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dialogs;
