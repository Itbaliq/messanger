import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {

  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }

  })

}

export const loginAccount = (email, password, rememberMe, setStatus) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        setStatus(response.data.messages)
      }

    })

  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }

    })

  }
}
export default authReducer;