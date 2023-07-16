import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import "../App.css";

function ProfileScreen({}) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("Update Successful");
    }
  };

  return (
    <div className="bg-image" style={{ height: "95vh" }}>
      <div className="bg-text"></div>
      <Row>
        <Col md={3}>
          <Form className="form" onSubmit={submitHandler}>
            <h2 className="line text-center mx-auto text-light">
              User Profile
            </h2>

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

            <Form.Group className="mb-3 mx-auto" controlId="name">
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
              Update
            </Button>

            <Row className="pt-3"></Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
export default ProfileScreen;
