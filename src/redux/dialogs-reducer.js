const SEND_MESSAGE='SEND-MESSAGE';

let initialState ={
    dialogs: [
        { id: 1, name: "Van" },
        { id: 2, name: "Billy" },
        { id: 3, name: "Rickardo" }
    ],
    messages: [
        { id: 1, message: "Fuck" },
        { id: 2, message: "You" },
        { id: 3, message: "Leather Man" }
    ]
};

 const dialogsReducer=(state = initialState,action)=>{

    switch (action.type) {
        case SEND_MESSAGE:{ 
            let body =action.message;
            return{
                ...state,
                messages:[...state.messages,{id:6,message:body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (message) => ({type: SEND_MESSAGE,message})
  
  
export default dialogsReducer;