import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actions, { updateProfileSuccess, updateProfileFailure } from './actions';
import api from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const respose = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(respose.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil. Confira seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(actions.UPDATE_PROFILE_REQUEST, updateProfile)]);
