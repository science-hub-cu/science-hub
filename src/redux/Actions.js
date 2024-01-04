export const SET_USER_NAME = "SET_USER_NAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_ERROR = "SET_ERROR";
export const SET_INVALID = "SET_INVALID";
export const setUserName = (userName) => (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: userName,
  });
};

export const setPassword = (password) => (dispatch) => {
  dispatch({
    type: SET_PASSWORD,
    payload: password,
  });
}

export const setError = (error) => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: error,
  });
}

export const setInvalid = (invalid) => (dispatch) => {
  dispatch({
    type: SET_INVALID,
    payload: invalid,
  });
}
