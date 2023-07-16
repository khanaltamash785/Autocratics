import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, InputGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveCasesDetails } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import "../App.css";

function ClientCaseScreen() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [disputeValue, setDisputeValue] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [file, setFile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveCasesDetails({ category, disputeValue, descriptions, file }));
    navigate("/awards_screen");
  };

  return (
    <div className="bodyf2 formcontainer2 casedetail" style={{ height: "90vh" }}>
      
      <div className=" bg-text">
        <CheckoutSteps step1 step2 step3 />
        <Row className="py-5 justify-center">
          <Col>
            <Form className="form" onSubmit={submitHandler}>
              <Card.Header className="freshcard">
                <h3 className="line text-center mx-auto text-light">
                  Client Details
                </h3>
              </Card.Header>

              <Form.Group controlId="category">
                <Form.Label>Aadhar No</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter Category"
                  value={category ? category : " "}
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="disputeValue">
                <Form.Label>Driving Licence No</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Dispute Value"
                  value={disputeValue ? disputeValue : ""}
                  onChange={(e) => setDisputeValue(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="descriptions">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  type="text"
                  placeholder="Description(Max length=200)"
                  value={descriptions ? descriptions : ""}
                  onChange={(e) => setDescriptions(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="file">
                <Form.Label>File Upload</Form.Label>
                <Form.Control
                  required
                  type="upload"
                  placeholder="Enter File Upload"
                  value={file ? file : ""}
                  onChange={(e) => setFile(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Row className="py-3">
                <Button
                  className=" mx-auto text-center"
                  type="submit"
                  style={{ backgroundColor: "#0F3A57" }}
                >
                  Continue
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ClientCaseScreen;
