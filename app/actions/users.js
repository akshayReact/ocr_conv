import * as types from '../types';

export function getUsers(users){
  console.warn("KAOAOAOA")
  return {
    type: types.GET_USERS_REQUESTED,
    payload: users
  }
}