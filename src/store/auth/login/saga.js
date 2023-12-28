import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_USER, } from "./actionTypes";
// import { loginSuccess,loginFail,} from "./actions";
import {auth} from '../../../helpers/api_url';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(auth.login, user);
    localStorage.setItem("_token", JSON.stringify(response._token).slice(1, -1));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    yield put({type:LOGIN_SUCCESS,payload:response.data.user});
    toast.success("Login Successfully.", { autoClose: 2000 });
    history("/dashboard");
  } catch (error) {
    yield put({type:LOGIN_FAIL});
		toast.error("Invalid Credentials.", { autoClose: 2000 });
  }

}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export default authSaga;
