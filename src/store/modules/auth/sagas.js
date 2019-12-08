import { all, takeLatest, call, put } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';
import actions, { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  console.tron.log(email, password);
  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });
  console.tron.log('2');

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Usuario nao e prestador de servico');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest(actions.SIGN_IN_REQUEST, signIn)]);
