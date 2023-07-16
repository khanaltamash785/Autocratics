import { Card, Row, Col, Button, CardGroup } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../App.css";
import Piechart from "../components/Piechart";

function Dashboard() {
  return (
    <div className="dg-image">
      <div className="App">
        <div className="AppGlass">
          <div className="MainDash">
            <div>
              <Navbar
                className="text-right text-light navbar-own"
                style={{ backgroundColor: "#39529E" }}
                variant="dark"
                expand="lg"
                collapseOnSelect
              >
                <Navbar.Brand className="mb-2 text-centre text-light">
                  <i className=" mx-2"></i>Dashboard
                </Navbar.Brand>
                <Nav>
                  <LinkContainer to="/notifications">
                    <Nav.Link className="mb-2 text-light">
                      <i className="fa-solid fa-bell mx-2"></i>Notifications
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar>

              <Row>
                <CardGroup className="m-5 Cards">
                  <div className="col-md-10 mt-5 ">
                    <div className="row">
                      <LinkContainer to="/client_screen">
                        <div className="col-xl-3 col-lg-6 my-4">
                          <div className="card l-bg-blue-dark">
                            <div className="card-statistic-3 p-4">
                              <div className="card-icon card-icon-large">
                                <i className="fas fa-users"></i>
                              </div>
                              <div className="mb-4">
                                <h5 className="card-title mb-0">
                                  <b>Fresh Cases</b>
                                </h5>
                              </div>
                              <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8"></div>
                                <div className="col-4 text-right">
                                  <span>
                                    00<i className="fa fa-arrow-up"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LinkContainer>

                      <LinkContainer to="/client_case_screen">
                        <div className="col-xl-3 col-lg-6 my-4">
                          <div className="card l-bg-blue-dark">
                            <div className="card-statistic-3 p-4">
                              <div className="card-icon card-icon-large">
                                <i className="fas fa-users"></i>
                              </div>
                              <div className="mb-4">
                                <h5 className="card-title mb-0">
                                  <b>Case Details</b>
                                </h5>
                              </div>
                              <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8"></div>
                                <div className="col-4 text-right">
                                  <span>
                                    00<i className="fa fa-arrow-up"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LinkContainer>

                      <LinkContainer to="/awards_screen">
                        <div className="col-xl-3 col-lg-6 my-4">
                          <div className="card l-bg-blue-dark">
                            <div className="card-statistic-3 p-4">
                              <div className="card-icon card-icon-large">
                                <i className="fas fa-users"></i>
                              </div>
                              <div className="mb-4">
                                <h5 className="card-title mb-0">
                                  <b>Case Awards</b>
                                </h5>
                              </div>
                              <div className="row align-items-center mb-2 d-flex">
                                <div className="col-8"></div>
                                <div className="col-4 text-right">
                                  <span>
                                    00<i className="fa fa-arrow-up"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LinkContainer>

                      <div className="col-xl-3 col-lg-6 my-4">
                        <div className="card l-bg-blue-dark">
                          <div className="card-statistic-3 p-4">
                            <div className="card-icon card-icon-large">
                              <i className="fas fa-users"></i>
                            </div>
                            <div className="mb-4">
                              <h5 className="card-title mb-0">
                                <b>All Cases</b>
                              </h5>
                            </div>
                            <div className="row align-items-center mb-2 d-flex">
                              <div className="col-8"></div>
                              <div className="col-4 text-right">
                                <span>
                                  00<i className="fa fa-arrow-up"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardGroup>
              </Row>

              <Row className="mt-5">
                <container>
                  <Row>
                    <Col>
                      <Card
                        className="mt-3"
                        style={{ backgroundColor: "#646FD4" }}
                      ></Card>
                    </Col>
                    <Col>
                      <Card
                        className="mt-3"
                        style={{ backgroundColor: "#646FD4" }}
                      ></Card>
                    </Col>
                  </Row>
                </container>
              </Row>

              <Row className="mt-3">
                <container>
                  <Row>
                    <Col>
                      <Card
                        className="mx-2 text-center dcard2"
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <Card.Header
                          className="mx-2 text-center text-light"
                          style={{ backgroundColor: "#39529E" }}
                        >
                          <b>Article</b>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>Course for the Arbitrators</Card.Title>
                          <Card.Text>
                            Senior Advocates and Senior Partners teach this
                            2-month online course on Practice of International
                            Arbitration: Register Now!
                          </Card.Text>
                          <a
                            href="https://www.barandbench.com/news/online-certificate-course-on-practice-of-international-arbitration"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="primary">Learn More</Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card
                        className="mx-2 text-center dcard2 "
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <Card.Header
                          className="mx-2 text-center text-light"
                          style={{ backgroundColor: "#39529E" }}
                        >
                          <b>Analysis</b>
                        </Card.Header>

                        <Card.Body>
                          <Piechart></Piechart>
                          <Card.Text>Analysis of Cases</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </container>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
