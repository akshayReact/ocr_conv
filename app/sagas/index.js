import { takeEvery, all } from 'redux-saga/effects';
// import { STORIES_FETCH } from '../constants/actionTypes';
// import { handleFetchStories } from './userSaga';
import userSaga from './userSaga';


function* watchAll() {
  console.warn("dadadada")
  yield all([
    // takeEvery(STORIES_FETCH, handleFetchStories),
    userSaga()
  ])
}
 
export default watchAll;