import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import {changePreloader} from "store/layout/actions";


// users
import user1 from "../../../assets/images/users/avatar-1.jpg";

import {get,setToken} from "helpers/api_helper";

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("Admin");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userData=JSON.parse(localStorage.getItem("user"));
      const username=userData.first_name + " " + userData.last_name;
      setusername(username); 
    }
  }, [props.success]);
  const dispatch = useDispatch();

  function logout(){
    setToken(localStorage.getItem("_token"));
    dispatch(changePreloader({status:true,text:'Logging out Please wait ....'}));
    get("/logout")
    .then((res)=>{
      localStorage.removeItem("_token");
      localStorage.removeItem("user");
      window.location.reload();
    },(e)=>{
      dispatch(changePreloader({status:false,text:''}));
      console.log(e)
    })
  }




  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {props.t("Profile")}{" "}
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            {/* <span className="badge bg-success float-end">11</span> */}
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Button className="dropdown-item" onClick={logout}>
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Button>
      
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
};

const mapStatetoProps = state => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
);
