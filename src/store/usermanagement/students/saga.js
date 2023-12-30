import { call, put, takeEvery } from "redux-saga/effects";
// Student Redux States
import { ADD_STUDENT_USER, ADD_STUDENT_USER_SUCCESS,ADD_STUDENT_USER_FAIL,LIST_STUDENT_USER,LIST_STUDENT_USER_SUCCESS,LIST_STUDENT_USER_FAIL, DELETE_STUDENT_USER, DELETE_STUDENT_USER_SUCCESS, DELETE_STUDENT_USER_FAIL} from "./actionTypes";
import {CHANGE_PRELOADER} from "../../layout/actionTypes";
import {student} from '../../../helpers/api_url';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* addStudentUser(action) {
  yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Save Data In Please Wait ...."}})
  try {
    const response = yield call(student.add, action.payload);
    yield put({type:ADD_STUDENT_USER_SUCCESS,payload:response.data});
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
  } catch (error) {
    const message = (error.response) ? error.response.data.message : error.message;
    yield put({type:ADD_STUDENT_USER_FAIL,payload:message});
		toast.error(message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
  }
}

function* listStudentUser() {
  yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Fetching Data In Please Wait ...."}})
  try {
    const response = yield call(student.list);
    yield put({type:LIST_STUDENT_USER_SUCCESS,payload:response.data});
    toast.success(response.message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
  } catch (error) {
    const message = (error.response) ? error.response.data.message : error.message;
    yield put({type:LIST_STUDENT_USER_FAIL,payload:message});
		toast.error(message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
  }
}



function* deleteStudentUser(action) {
    yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Deleting Data In Please Wait ...."}})
    try {
      const response = yield call(student.delete, action.payload);
      yield put({type:DELETE_STUDENT_USER_SUCCESS,payload:response.data});
      toast.success(response.message, { autoClose: 2000 });
      yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
    } catch (error) {
      const message = (error.response) ? error.response.data.message : error.message;
      yield put({type:DELETE_STUDENT_USER_FAIL,payload:message});
          toast.error(message, { autoClose: 2000 });
      yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
    }
  }

function* StudentSaga() {
  yield takeEvery(ADD_STUDENT_USER, addStudentUser);
  yield takeEvery(LIST_STUDENT_USER, listStudentUser);
  yield takeEvery(DELETE_STUDENT_USER, deleteStudentUser);
}

export default StudentSaga;
