const actions = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
};

export default actions;

export function signInRequest(email, password) {
  return {
    type: actions.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: actions.SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: actions.SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: actions.SIGN_FAILURE,
  };
}
