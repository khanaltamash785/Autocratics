import React, { useState, useEffect } from "react";

import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveClientDetails } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";

import CardHeader from "react-bootstrap/esm/CardHeader";

function ClientScreen({}) {
  const cart = useSelector((state) => state.cart);
  const { clientDetails } = cart;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [claimantName, setClaimantName] = useState("");
  const [claimantNumber, setClaimantNumber] = useState("");
  const [claimantEmail, setClaimantEmail] = useState("");
  const [claimantAddress, setClaimantAddress] = useState("");

  const [respondentName, setRespondentName] = useState("");
  const [respondentNumber, setRespondentNumber] = useState("");
  const [respondentEmail, setRespondentEmail] = useState("");
  const [respondentAddress, setRespondentAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveClientDetails({
        claimantName,
        claimantNumber,
        claimantEmail,
        claimantAddress,
        respondentName,
        respondentNumber,
        respondentEmail,
        respondentAddress,
      })
    );
    navigate("/client_case_screen");
  };

  return (
    <div className="bodyf formcontainerf">
      <Form onSubmit={submitHandler}>
        <CheckoutSteps step1 step2 />
        <Row className="py-3">
          <Col>
            <Card>
              <Card.Body>
                <Col>
                  <Card.Header className="freshcard">
                    <h6>Client Details</h6>
                  </Card.Header>
                  <Form.Group controlId="claimantName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Claimant Name"
                      value={claimantName ? claimantName : ""}
                      onChange={(e) => setClaimantName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="claimantNumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Claimant Number"
                      value={claimantNumber ? claimantNumber : ""}
                      onChange={(e) => setClaimantNumber(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="claimantEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Claimant Email"
                      value={claimantEmail ? claimantEmail : ""}
                      onChange={(e) => setClaimantEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="claimantAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Claimant Address"
                      value={claimantAddress ? claimantAddress : ""}
                      onChange={(e) => setClaimantAddress(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Button className="mt-3" type="submit">
            Continue
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default ClientScreen;
