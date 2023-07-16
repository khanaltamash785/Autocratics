import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center px-3"
        style={{ backgroundColor: "#0F3A57" }}
      >
        <div
          // style={{ width: "fit-content" }}
          className="d-flex align-items-center"
        >
          <img src="images/flag.jpg" className="flag img-fluid"></img>
          <div className="ms-2" style={{ color: "#ffffff" }}>
            Smart Parking System
          </div>
        </div>

        <div
          style={{ color: "#ffffff" }}
          className="d-flex align-items-baseline"
        >
          <div>
            <i className="fa-solid fa-2x fa-language"></i>
          </div>
          <div></div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center px-3">
        <div
          // style={{ width: "fit-content" }}
          className="d-flex align-items-center"
        >
          <img src="images/goi.jfif" className="mlogo-image img-fluid"></img>
          <div className="ms-3">Smart Parking System</div>
        </div>

        <div className="d-flex align-items-baseline">
          <div>
            <img
              src="https://www.pngitem.com/pimgs/m/611-6119813_parkwit-is-a-smart-parking-management-system-that.png "
              className="img-fluid swachh-image"
            ></img>
          </div>
          
        </div>
      </div>

      <Navbar
        className="sticky-top "
        style={{ backgroundColor: "#0F3A57", height: "4rem" }}
        variant="dark"
        expand="lg"
      >
        <Container>
          {/*<div className="logo-image mx-3">
            <img src="images/loogo.jpg" className="img-fluid"></img>
  </div>*/}

          <LinkContainer to="/">
            <div>
              <h5 style={{ color: "white" }}>Home</h5>
            </div>
          </LinkContainer>

          <LinkContainer to="/about_us">
            <div className="ms-4">
              <h5 style={{ color: "white" }}>About us</h5>
            </div>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                  <LinkContainer to="/dash_board">
                    <NavDropdown.Item>Dash Board</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login{" "}
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Arbitrator</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/notifications">
                <Nav.Link>Notifications</Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login{" "}
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
              </Navbar>*/}
    </>
  );
}

export default Header;
