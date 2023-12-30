import {
    ADD_STUDENT_USER,
    ADD_STUDENT_USER_SUCCESS,
    ADD_STUDENT_USER_FAIL,

   LIST_STUDENT_USER,
   LIST_STUDENT_USER_SUCCESS,
   LIST_STUDENT_USER_FAIL,

   DELETE_STUDENT_USER,
   DELETE_STUDENT_USER_SUCCESS,
   DELETE_STUDENT_USER_FAIL,
  } from "./actionTypes"
  
  export const studentUser = (sendData) => {
    return {
      type: ADD_STUDENT_USER,
      payload:sendData,
    }
  }
  
  export const studentUserSuccess = successData => {
    return {
      type: ADD_STUDENT_USER_SUCCESS,
      payload: successData,
    }
  }
  
  export const studentUserFail = failError => {
    return {
      type: ADD_STUDENT_USER_FAIL,
      payload: failError,
    }
  }


  export const studentList = () => {
    return {
      type:LIST_STUDENT_USER,
    }
  }
  
  export const studentListSuccess = successData => {
    return {
      type:LIST_STUDENT_USER_SUCCESS,
      payload: successData,
    }
  }
  
  export const studentListFail = failError => {
    return {
      type:LIST_STUDENT_USER_FAIL,
      payload: failError,
    }
  }
  
    
  export const deleteStudentUser = (sendData) => {
    return {
      type: DELETE_STUDENT_USER,
      payload:sendData,
    }
  }
  
  export const deleteStudentUserSuccess = successData => {
    return {
      type: DELETE_STUDENT_USER_SUCCESS,
      payload: successData,
    }
  }
  
  export const deleteStudentUserFail = failError => {
    return {
      type: DELETE_STUDENT_USER_FAIL,
      payload: failError,
    }
  }
  