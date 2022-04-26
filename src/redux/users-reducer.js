import { useCallback } from "react";

const Change_User_Subsctription = 'ChangeUserSubsctription';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';
let initialState = {

    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case Change_User_Subsctription:
            return {
                ...state,
                users:
                    ChangeUserSubsctriptionF(state, action.userId)
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress,action.id] 
                : state.followingInProgress.filter(id=>id!=action.id)
            }
        default:
            return state;
    }
}

function ChangeUserSubsctriptionF(state, userId) {
    return state.users.map(u => {
        if (u.id === userId) {
            return { ...u, followed: !u.followed };
        }
        return u;
    });
}

export const ChangeUserSubsctription = (userId) => ({ type: Change_User_Subsctription, userId });
export const setUsers = (users) => { return { type: SET_USERS, users }; };
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage }; };
export const setTotalUsersCount = (totalCount) => { return { type: SET_TOTAL_COUNT, totalCount }; };
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching }; };
export const toggleFollowingInProgress = (isFetching,id) => { return { type: TOGGLE_IS_FOLLOWING, isFetching,id }; };

export default usersReducer;