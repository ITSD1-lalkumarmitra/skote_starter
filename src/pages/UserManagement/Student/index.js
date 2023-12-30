import React from 'react'

//import commponent/common file 
import Breadcrumbs from "components/Common/Breadcrumb";

const index = () => {
  return (
    <React.Fragment>
        <div className="page-content">
        <Breadcrumbs title="User" breadcrumbItem="Student's" />
        <div className="container-fluid">
            hello
        </div>
        </div>
    </React.Fragment>
  )
}
export default index