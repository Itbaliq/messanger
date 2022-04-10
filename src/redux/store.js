import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Fuck you", likescount: 2 },
                { id: 2, message: "Ass we can", likescount: 9 },
                { id: 3, message: "Another victim", likescount: 67 },
                { id: 4, message: "Boss of this gym", likescount: 0 },
                { id: 5, message: "Be gentle huh", likescount: 33 },
                { id: 6, message: "Boy next door", likescount: 76 }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Van" },
                { id: 2, name: "Billy" },
                { id: 3, name: "Rickardo" }
            ],
            messages: [
                { id: 1, message: "Fuck" },
                { id: 2, message: "You" },
                { id: 3, message: "Leather Man" }
            ],
            newMessageBody:''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }
}


  
export default store;
window.store = store;