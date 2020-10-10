import { call, put, takeEvery } from 'redux-saga/effects';
 
const HN_BASE_URL = 'https://jsonplaceholder.typicode.com/users';
 
function getApi() {
 return fetch(HN_BASE_URL,{
   method : 'GET',
   headers:{
     'Content-Type':'application/json',
   }
 })
    .then(response => response.json())
    .catch((error) => {throw error})

}
 
function* fetchUsers(action) {
  console.warn("iaaappp")
  
  try{
    const users = yield call(getApi);
    yield put({type:'GET_USERS_SUCCESS',users:users});
  } catch(e) {
    yield put({type:'GET_USERS_FAILED',message:e.message})
  }
}
 
function* userSaga() {
  console.warn("iiiiaaas")
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;