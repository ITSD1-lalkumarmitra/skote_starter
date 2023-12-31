import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//Student Manage data 
import StudentReducer from "./usermanagement/students/reducer";
import StaffReducer from "./usermanagement/staff/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  StudentReducer,
  StaffReducer,
});

export default rootReducer;
