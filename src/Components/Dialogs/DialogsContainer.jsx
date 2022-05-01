import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';

let mapStateToProps=(state)=>{
  return{
    dialogsPage:state.dialogsPage,
    isAuth:state.auth.isAuth
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

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)
(Dialogs);