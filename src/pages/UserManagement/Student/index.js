import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader } from 'reactstrap';
//import commponent/common file 
import Breadcrumbs from "components/Common/Breadcrumb";

const index = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="User" breadcrumbItem="Student's" />
        <div className="container-fluid">
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">Student Lists</h5>
                    <div className="flex-shrink-0">
                      <Link to="#" className="btn btn-success me-1"> Add Student</Link>
                    </div>
                  </div>
                </CardHeader>

              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}
export default index