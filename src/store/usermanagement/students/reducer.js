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
  
  const initialState = {
    studentData: "",
    error: "",
    loading: false,
  }
  
  const StudentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STUDENT_USER:
        state = {
          ...state,
          loading: true,
        }
        break
      case ADD_STUDENT_USER_SUCCESS:
        state = {
          ...state,
          loading: false,
        }
        break
      case ADD_STUDENT_USER_FAIL:
        state = { ...state, error: action.payload, loading: false }
        break

      case LIST_STUDENT_USER:
        state = {
          ...state,
          studentData:action.payload,
          loading: true,
        }
        break
      case LIST_STUDENT_USER_SUCCESS:
        state = {
          ...state,
          loading: false,
        }
        break
      case LIST_STUDENT_USER_FAIL:
        state = { ...state, error: action.payload, loading: false }
        break

        case DELETE_STUDENT_USER:
          state = {
            ...state,
            loading: true,
          }
          break
        case DELETE_STUDENT_USER_SUCCESS:
          state = {
            ...state,
            loading: false,
          }
          break
        case DELETE_STUDENT_USER_FAIL:
          state = { ...state, error: action.payload, loading: false }
          break

      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default StudentReducer
  