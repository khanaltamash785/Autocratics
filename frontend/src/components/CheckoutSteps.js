import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Login</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/client">
            <Nav.Link>Client Details</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Client Details</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/clientcase">
            <Nav.Link>Case Details</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Case Details</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/awards">
            <Nav.Link>Disposed Case</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Disposed Case</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
