import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {get,setToken} from "../helpers/api_helper";
import { toast } from "react-toastify";
import Spinners from "components/Common/Spinner";

const validate = async s => {
  const t = localStorage.getItem('_token');
  if(t){
    setToken(t);
    get('/validate').then(r=>s(r.message === 'authenticated')).catch(e=>{
      s(false)
      localStorage.removeItem('_token');
      localStorage.removeItem('user');
      toast.error("Session time out : " + e.response.data.message, { autoClose: 2000 });
    })
  }else s(false)
}

export const Authmiddleware = (props) => {
  const [tokenIsValid,setTokenIsValid] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{ validate(setTokenIsValid); },[])
  return (tokenIsValid)
  ?(<React.Fragment>{props.children}</React.Fragment>)
  :((tokenIsValid === null)?(<Spinners setLoading={setLoading}></Spinners>):(<Navigate to={{ pathname: "/", state: { from: props.location } }} />));
};

export const GuestMiddleware = (props) =>{
  const [tokenIsValid,setTokenIsValid] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{ validate(setTokenIsValid); },[])
  const userRole = JSON.parse(localStorage.getItem('user')).role.role_type;
  const routePrefix = userRole !== 'admin'? "/"+userRole : "";
  return (tokenIsValid)
  ?(<Navigate to={{ pathname: `${routePrefix}/dashboard`, state: { from: props.location } }} />)
  :((tokenIsValid == null)?(<Spinners setLoading={setLoading}></Spinners>):(<React.Fragment> {props.children} </React.Fragment>));
}
