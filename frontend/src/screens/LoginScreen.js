import "../App.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";

function LoginScreen({}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/dash_board";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="bg-image">
        <div className="bg-text">
          <Form className="form" onSubmit={submitHandler}>
            <h2 className="line text-center mx-auto text-light">Sign In</h2>

            {loading ? (
              <Loader />
            ) : (
              <div className="notification">
                {error && (
                  <Message className="notification" variant="danger">
                    {error}
                  </Message>
                )}
              </div>
            )}

            <Form.Group className="mb-3 mx-auto" controlId="email">
              <Form.Label>
                <i className="fa-solid fa-envelope"></i> <b>Email Address*</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 mx-auto" controlId="password">
              <Form.Label>
                <i className="fa-solid fa-key"></i> <b>Password*</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              className="custom-btn mt-1 mx-auto"
              variant="dark"
              size="sm"
            >
              Sign In
            </Button>

            <Row className="pt-3">
              <Col className="text-center signup-link">
                <div>
                  Don't have an account?
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    <h7>
                      <i>
                        <b>Register here</b>
                      </i>
                    </h7>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
