import React from "react"
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap"


//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

const index = props => {
  //meta title
  document.title = "Dashboard | Admin"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={"Admin"} breadcrumbItem={"Dashboard"} />

          {/* top bar welcom text */}
          <Row className="my-2">
            <Col className="px-4 d-flex justify-content-between">
                <div>
                    <h4>Hello <span>{JSON.parse(localStorage.getItem('user')).first_name}</span></h4>
                    <p>Here's What is heppning with your School today ..</p>
                </div>
                <div>
                    <button className="btn btn-soft-primary">
                    <i className="bx bx-cog"></i>
                    <span className="d-none d-md-inline ms-2">Settings</span>
                    </button>
                </div>
            </Col>
          </Row>

          {/* information at a glance section */}
          <Row>
            <Col>
              <CardGroup>

                <Card className="mx-2">
                  <CardBody>
                    <div className="d-flex justify-content-between align-item-center">
                        <CardTitle>Students</CardTitle>
                        <button className="btn btn-sm btn-soft-success">
                            <i className="mdi mdi-run"></i>
                        </button>
                    </div>
                    <CardText className="pt-1">
                        <Row className="my-3">
                            <Col className="d-flex justify-content-between">
                                <span className="fw-bold">Total:</span>
                                <span>500</span>
                            </Col>
                        </Row>
                        <div className="d-lg-flex d-md-block d-flex justify-content-between">
                            <div className="d-lg-block d-md-flex d-block justify-content-between mb-1">
                                <span className="fw-bold">Present:</span>
                                <span className="ms-2">500</span>
                            </div>
                            <div className="d-lg-block d-md-flex d-block justify-content-between">
                                <span className="fw-bold">Absent:</span>
                                <span className="ms-2">500</span>
                            </div>
                        </div>
                    </CardText>
                    <CardFooter className="text-center" style={{cursor:'pointer'}}><span>Student Details</span></CardFooter>
                  </CardBody>
                </Card>

                <Card className="mx-2">
                  <CardBody>
                    <div className="d-flex justify-content-between align-item-center">
                        <CardTitle>Staffs</CardTitle>
                        <button className="btn btn-sm btn-soft-success">
                            <i className="mdi mdi-run"></i>
                        </button>
                    </div>
                    <CardText className="pt-1">
                        <Row className="my-3">
                            <Col className="d-flex justify-content-between">
                                <span className="fw-bold">Total:</span>
                                <span>500</span>
                            </Col>
                        </Row>
                        <div className="d-lg-flex d-md-block d-flex justify-content-between">
                            <div className="d-lg-block d-md-flex d-block justify-content-between mb-1">
                                <span className="fw-bold">Present:</span>
                                <span className="ms-2">500</span>
                            </div>
                            <div className="d-lg-block d-md-flex d-block justify-content-between">
                                <span className="fw-bold">Absent:</span>
                                <span className="ms-2">500</span>
                            </div>
                        </div>
                    </CardText>
                    <CardFooter className="text-center" style={{cursor:'pointer'}}><span>Staff Details</span></CardFooter>
                  </CardBody>
                </Card>

                <Card className="mx-2">
                  <CardBody>
                    <div className="d-flex justify-content-between align-item-center">
                        <CardTitle>Finance</CardTitle>
                        <button className="btn btn-sm btn-soft-success">
                            <i className="mdi mdi-run"></i>
                        </button>
                    </div>
                    <CardText className="pt-1">
                        <Row className="my-3">
                            <Col className="d-flex justify-content-between">
                                <span className="fw-bold">Profit:</span>
                                <span>500</span>
                            </Col>
                        </Row>
                        <div className="d-lg-flex d-md-block d-flex justify-content-between">
                            <div className="d-lg-block d-md-flex d-block justify-content-between mb-1">
                                <span className="fw-bold">Expense:</span>
                                <span className="ms-2">500</span>
                            </div>
                            <div className="d-lg-block d-md-flex d-block justify-content-between">
                                <span className="fw-bold">Revenue:</span>
                                <span className="ms-2">500</span>
                            </div>
                        </div>
                    </CardText>
                    <CardFooter className="text-center" style={{cursor:'pointer'}}><span>Finance Details</span></CardFooter>
                  </CardBody>
                </Card>

                <Card className="mx-2">
                  <CardBody>
                    <div className="d-flex justify-content-between align-item-center">
                        <CardTitle>Attendance</CardTitle>
                        <button className="btn btn-sm btn-soft-success">
                            <i className="mdi mdi-run"></i>
                        </button>
                    </div>
                    <CardText className="pt-1">
                        <Row className="my-3">
                            <Col className="d-flex justify-content-between">
                                <span className="fw-bold">Total:</span>
                                <span>469/705</span>
                            </Col>
                        </Row>
                        <div className="d-lg-flex d-md-block d-flex justify-content-between">
                            <div className="d-lg-block d-md-flex d-block justify-content-between mb-1">
                                <span className="fw-bold">Students:</span>
                                <span className="ms-2">546/680</span>
                            </div>
                            <div className="d-lg-block d-md-flex d-block justify-content-between">
                                <span className="fw-bold">Staffs:</span>
                                <span className="ms-2">23/25</span>
                            </div>
                        </div>
                    </CardText>
                    <CardFooter className="text-center" style={{cursor:'pointer'}}><span>Attendance Details</span></CardFooter>
                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default index
