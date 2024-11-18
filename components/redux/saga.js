import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';

function* userList() {
  const url = 'http://localhost:3000/api/v1/project/get-all-projects';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
  console.warn('data in saga', data);
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
