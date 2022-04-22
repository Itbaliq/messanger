import { useCallback } from "react";

const Change_User_Subsctription = 'ChangeUserSubsctription';
const SET_USERS='SET_USERS';

let initialState = {

    users: [
                  
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case Change_User_Subsctription:
            return {
                ...state, 
                users: 
                ChangeUserSubsctription(state, action.userId)};    
        case SET_USERS:
            return {
                ...state, 
                users:[ ...state.users , ...action.users]
            }
        default:
            return state;
    }
}

function ChangeUserSubsctription(state, userId){
    return state.users.map(u => {
        if(u.id===userId){
            return{...u, followed : !u.followed};
        }
     return u;
    });
}

export const ChangeUserSubsctriptionAC = (userId) => ({ type: Change_User_Subsctription ,userId});
export const setUsersAC = (users) => {
    console.log(users);
    return { type: SET_USERS, users: users};};

export default usersReducer;