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
  
  const initialState = {
    staffData: [],
    error: null,
    loading: false,
  }
  
  const StaffReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STAFF_USER:
        state = {
          ...state,
          loading: true,
        }
        break
      case ADD_STAFF_USER_SUCCESS:
        state = {
          ...state,
          loading: false,
        }
        break
      case ADD_STAFF_USER_FAIL:
        state = { ...state, error: action.payload, loading: false }
        break

      case LIST_STAFF_USER:
        state = {
          ...state,
          staffData:action.payload,
          loading: true,
        }
        break
      case LIST_STAFF_USER_SUCCESS:
        state = {
          ...state,
          loading: false,
        }
        break
      case LIST_STAFF_USER_FAIL:
        state = { ...state, error: action.payload, loading: false }
        break

        case DELETE_STAFF_USER:
          state = {
            ...state,
            loading: true,
          }
          break
        case DELETE_STAFF_USER_SUCCESS:
          state = {
            ...state,
            loading: false,
          }
          break
        case DELETE_STAFF_USER_FAIL:
          state = { ...state, error: action.payload, loading: false }
          break

      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default StaffReducer
  