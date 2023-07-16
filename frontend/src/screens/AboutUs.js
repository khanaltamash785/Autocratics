import React from "react";
import {
  Container,
  Card,
  CardGroup,
  Col,
  Row,
  Carousel,
} from "react-bootstrap";

function AboutUs() {
  return (
    <div className="position-relative">
      <Container>
        <div>
          <img className="d-block w-100" src="./images/aboutus.jpg" />
        </div>

        <Row className="justify-content-md-center">
          <div className="mt-5 aboutus">
            <Card.Header style={{ textAlign: "center", color: "#525252" }}>
              <h5>
                <b>About Us</b>
              </h5>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="text-justify">
                  
                </p>{" "}
                <p>
                With the increase of vehicles in the campus, parking has become a major concern. As the number of vehicles have increased, the security guards at the parking gate are finding it difficult to verify all the vehicles entering the campus since it involves manual monitoring that simply checks the identity card without verification, which can lead to unauthorized vehicles entering the campus. To avoid this confusion and risk and bring in a systematic parking system, we have introduced our Smart Parking System (i.e VPark). With the help of this system, we plan on eliminating the trouble of manual work and achieve a very effecient parling at the institute.
                </p>
              </Card.Text>
            </Card.Body>
          </div>
          <div className="mt-3">
            <Row>
              <h2 className="mt-5" style={{ color: "#0F3A57" }}>
              
              </h2>
            </Row>
            <div className="mt-3" style={{ flex: "1 1 15rem" }}>
              
              
            </div>
          </div>
          <Col md="auto">
            <b></b>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
