import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import AdminDashboard from "../pages/Dashboard/Admin/index";

// Student
import Student from "../pages/UserManagement/Student"

const authProtectedRoutes = [

  // menu routes
  { is_menu:true, label:"Dashboard", path: "/dashboard", component: <AdminDashboard />, user:'admin',icon:"mdi mdi-run",children:[]},
  { is_menu:true, label:"Users", path: "", component: null, user:'admin',icon:"mdi mdi-run",children:[
      {label:"Students", path: "/students", component: <Student />},
      {label:"Staffs", path: "/staffs", component: <Dashboard />}
    ] 
  },



  // non-menu routes
  { is_menu:false, label:"Profile", path: "/profile", component: <UserProfile />, user:'admin',icon:"mdi mdi-run",children:[] },
  { is_menu:false, label:"Logout", path: "/logout", component: <Logout />, user:null, children:[] },

];

const publicRoutes = [
  { path:"/", component:<Login/>},
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
