import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import Card from "react-bootstrap/Card";

function RegisterScreen({}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="bg-image2" style={{ height: "95vh" }}>
      <div className="bg-text">
        <Form className="form" onSubmit={submitHandler}>
          <h2 className="line text-center mx-auto text-light">Register</h2>

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

          <Form.Group className="mb-1 mx-auto" controlId="name">
            <Form.Label>
              <i class="fa-solid fa-user"></i> Name
            </Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-2 mx-auto" controlId="email">
            <Form.Label>
              <i class="fa-solid fa-envelope"></i> Email Address
            </Form.Label>

            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-2 mx-auto" controlId="password">
            <Form.Label>
              <i class="fa-solid fa-key"></i> Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-1 mx-auto" controlId="passwordConfirm">
            <Form.Label>
              <i class="fa-solid fa-lock"></i> Confirm Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            type="submit"
            className="custom-btn mt-1 mx-auto"
            variant="dark"
            size="sm"
          >
            Register
          </Button>

          <Row className="pt-3">
            <Col className="text-center signup-link">
              Already have an account?
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                <h7>
                  <i>
                    <b>Sign In</b>
                  </i>
                </h7>
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default RegisterScreen;
