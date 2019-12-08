import produce from 'immer';
import actions from './actions';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
