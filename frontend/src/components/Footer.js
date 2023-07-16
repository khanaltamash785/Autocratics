import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F3A57", color: "#ffffff" }}>
      <Container>
        <Row className="d-flex flex-wrap">
          <Col
            className="mt-3"
            style={{ textAlign: "left", flex: "1 1 22rem" }}
          >
            <ul>
              <li>CONTACT US : </li>
              <li style={{ color: "#808080" }}>Email : abc@vit.edu.in </li>
              <li style={{ color: "#808080" }}>
                Mobile : +91 - 1234567890 / +91 - 1234567890
              </li>
              <li style={{ color: "#808080" }}>LAND:011 - 46521414 </li>
              <li>CORPORATE OFFICE :</li>
              <li style={{ color: "#808080" }}>
                10, Third Floor, Poddar House, A Lane,{" "}
              </li>
              <li style={{ color: "#808080" }}>
                Marine Drive, Mumbai - 400020
              </li>
            </ul>
          </Col>
          <Col className="mt-3" style={{ flex: "1 1 22rem" }}>
            <ul className="footer-right">
              <li>
                <b>Get to Know</b>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.investindia.gov.in/"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Invest India
                </a>
              </li>
              <li>
                <a
                  href="/simple-page/associate-mygov/"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Ministry of Finance
                </a>
              </li>

              <li>
                <a
                  href="/simple-page/associate-mygov/"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Ministry of Finance
                </a>
              </li>
              <li>
                <a
                  href="https://www.rbi.org.in/"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Reserve Bank of India
                </a>
              </li>
              <li>
                <a
                  href="https://www.india.gov.in/"
                  style={{ textDecoration: "none", color: "#808080" }}
                >
                  Parking System Portal
                </a>
              </li>
            </ul>
          </Col>
          <div className="text-center mb-2">
            Copyright &copy;Autocratics All rights reserved <br></br>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
