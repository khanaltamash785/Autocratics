import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

import { createCases } from "../actions/caseActions";

function AwardsScreen() {
  const casesCreate = useSelector((state) => state.casesCreate);
  const { cases, error, success } = casesCreate;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (success) {
      navigate(`/cases/${cases._id}`);
    }
  }, [success, navigate]);

  const placeOrder = () => {
    dispatch(
      createCases({
        clientDetails: cart.clientDetails,
        casesDetails: cart.casesDetails,
      })
    );
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Client</h2>

              <p>
                <strong>Client: </strong>
                {cart.clientDetails.claimantName},{" "}
                {cart.clientDetails.claimantNumber},{"  "}
                {cart.clientDetails.claimantEmail},{"  "}
                {cart.clientDetails.claimantAddress}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2> Details</h2>

              <p>
                <strong>Details: </strong>
                {cart.casesDetails.category}, {cart.casesDetails.disputeValue},
                {"  "}
                {cart.casesDetails.descriptions},{"  "}
                {cart.casesDetails.file}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              {error && <Message variant="danger">{error}</Message>}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button type="button" className="btn-block" onClick={placeOrder}>
                Submit
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default AwardsScreen;
