import {
    ADD_STAFF_USER,
    ADD_STAFF_USER_SUCCESS,
    ADD_STAFF_USER_FAIL,

   LIST_STAFF_USER,
   LIST_STAFF_USER_SUCCESS,
   LIST_STAFF_USER_FAIL,

   DELETE_STAFF_USER,
   DELETE_STAFF_USER_SUCCESS,
   DELETE_STAFF_USER_FAIL,
  } from "./actionTypes"
  
  export const staffUser = (sendData) => {
    return {
      type: ADD_STAFF_USER,
      payload:sendData,
    }
  }
  
  export const staffUserSuccess = successData => {
    return {
      type: ADD_STAFF_USER_SUCCESS,
      payload: successData,
    }
  }
  
  export const staffUserFail = failError => {
    return {
      type: ADD_STAFF_USER_FAIL,
      payload: failError,
    }
  }


  export const staffList = () => {
    return {
      type:LIST_STAFF_USER,
    }
  }
  
  export const staffListSuccess = successData => {
    return {
      type:LIST_STAFF_USER_SUCCESS,
      payload: successData,
    }
  }
  
  export const staffListFail = failError => {
    return {
      type:LIST_STAFF_USER_FAIL,
      payload: failError,
    }
  }
  
    
  export const deletestaffUser = (sendData) => {
    return {
      type: DELETE_STAFF_USER,
      payload:sendData,
    }
  }
  
  export const deletestaffUserSuccess = successData => {
    return {
      type: DELETE_STAFF_USER_SUCCESS,
      payload: successData,
    }
  }
  
  export const deletestaffUserFail = failError => {
    return {
      type: DELETE_STAFF_USER_FAIL,
      payload: failError,
    }
  }
  