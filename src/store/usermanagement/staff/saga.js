import { call, put, takeEvery } from "redux-saga/effects";
//Staff Redux States
import { ADD_STAFF_USER, ADD_STAFF_USER_SUCCESS,ADD_STAFF_USER_FAIL,LIST_STAFF_USER,LIST_STAFF_USER_SUCCESS,LIST_STAFF_USER_FAIL, DELETE_STAFF_USER, DELETE_STAFF_USER_SUCCESS, DELETE_STAFF_USER_FAIL} from "./actionTypes";
import {CHANGE_PRELOADER} from "../../layout/actionTypes";
import {staff} from '../../../helpers/api_url';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* addStaffUser(action) {
  yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Save Data In Please Wait ...."}})
  try {
    const response = yield call(staff.add, action.payload);
    yield put({type:ADD_STAFF_USER_SUCCESS,payload:response.data});
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
  } catch (error) {
    const message = (error.response) ? error.response.data.message : error.message;
    yield put({type:ADD_STAFF_USER_FAIL,payload:message});
		toast.error(message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
  }
}

function* listStaffUser() {
  yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Fetching Data In Please Wait ...."}})
  try {
    const response = yield call(staff.list);
    yield put({type:LIST_STAFF_USER_SUCCESS,payload:response.data});
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
  } catch (error) {
    const message = (error.response) ? error.response.data.message : error.message;
    yield put({type:LIST_STAFF_USER_FAIL,payload:message});
		toast.error(message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
  }
}



function* deleteStaffUser(action) {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Deleting Data In Please Wait ...."}})
    try {
      const response = yield call(staff.delete, action.payload);
      yield put({type:DELETE_STAFF_USER_SUCCESS,payload:response.data});
      toast.success(response.message, { autoClose: 2000 });
      yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
    } catch (error) {
      const message = (error.response) ? error.response.data.message : error.message;
      yield put({type:DELETE_STAFF_USER_FAIL,payload:message});
          toast.error(message, { autoClose: 2000 });
      yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
    }
  }

function* StaffSaga() {
  yield takeEvery(ADD_STAFF_USER, addStaffUser);
  yield takeEvery(LIST_STAFF_USER, listStaffUser);
  yield takeEvery(DELETE_STAFF_USER, deleteStaffUser);
}

export default StaffSaga;
