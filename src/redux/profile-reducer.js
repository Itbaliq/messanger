import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {

    posts: [
        { id: 1, message: "Fuck you", likescount: 2 },
        { id: 2, message: "Ass we can", likescount: 9 },
        { id: 3, message: "Another victim", likescount: 67 },
        { id: 4, message: "Boss of this gym", likescount: 0 },
        { id: 5, message: "Be gentle huh", likescount: 33 },
        { id: 6, message: "Boy next door", likescount: 76 }
    ],
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            debugger;
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).
            then(response => {

                dispatch(setUserProfile(response.data));
            })

    }
}
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).
            then(response => {

                dispatch(setStatus(response.data));
            })

    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).
            then(response => {
                if(response.data.resultCode===0){
                dispatch(setStatus(status));
            }
            })

    }
}
export default profileReducer;