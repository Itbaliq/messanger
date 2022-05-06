import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { sendMessageCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';

let mapStateToProps=(state)=>{
  return{
    dialogsPage:state.dialogsPage,
    isAuth:state.auth.isAuth
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    sendMessage:(message)=>{
      dispatch(sendMessageCreator(message));
    }

  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)
(Dialogs);