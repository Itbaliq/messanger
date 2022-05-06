import { authAPI } from "../api/api";
const SET_FORM_DATA = 'SET_FORM_DATA';
const SETOUT_FORM_DATA = 'SETOUT_FORM_DATA';

let initialState = {

    email: "",
    password: "",
    login: false,
};

const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}


export const setFormUserData = (email, password,login) => ({
    type: SET_FORM_DATA,
    data: { email, password, login }
});


export const getFormData = (email,password) => {
    return (dispatch) => {
        let login = true;
        dispatch(setFormUserData(email, password, login));


    }
}

export default formReducer;