import { takeLatest, put, call } from 'redux-saga/effects';
import { axios } from 'axios';

function fetchDog() {
  return axios({
    method: 'get',
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

export function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    
    yield put({type: 'API_CALL_SUCCEEDED'}, dog);
  } catch (error) {
    yield put({type: 'API_CALL_FAILED'}, error);
  }
}
