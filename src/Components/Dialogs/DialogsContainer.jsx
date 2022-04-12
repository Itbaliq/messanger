import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';

let mapStateToProps=(state)=>{
  return{
    dialogsPage:state.dialogsPage
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    updateNewMessageBody:(body)=>{
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage:()=>{
      dispatch(sendMessageCreator());
    }

  }
}

const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;