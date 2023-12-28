import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_USER, } from "./actionTypes";
import {CHANGE_PRELOADER} from "../../layout/actionTypes";
// import { loginSuccess,loginFail,} from "./actions";
import {auth} from '../../../helpers/api_url';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* loginUser({ payload: { user, history } }) {
  yield put({type:CHANGE_PRELOADER,payload:{status:true,text:"Logging In Please Wait ...."}})
  try {
    const response = yield call(auth.login, user);
    localStorage.setItem("_token", JSON.stringify(response._token).slice(1, -1));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    yield put({type:LOGIN_SUCCESS,payload:response.data.user});
    toast.success("Login Successfully.", { autoClose: 2000 });
    history("/dashboard");
    yield put({type:CHANGE_PRELOADER,payload:{status:false,text:""}})
  } catch (error) {
    const message = (error.response) ? error.response.data.message : error.message;
    yield put({type:LOGIN_FAIL});
		toast.error(message, { autoClose: 2000 });
    yield put({type:CHANGE_PRELOADER,payload:{status:false,message:""}})
  }

}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export default authSaga;
