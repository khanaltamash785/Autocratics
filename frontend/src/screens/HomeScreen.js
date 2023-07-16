import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Card, CardGroup } from "react-bootstrap";
import "../App.css";
import "aos-animations/dist/animations.min.css";

const practiceArea = [
  {
    icon: "fa-building-columns",
    text: "Campus",
  },
  {
    icon: "fa-industry",
    text: "Mall",
  },
  {
    icon: "fa-tree large",
    text: "Railway station",
  },
  {
    icon: "fa-building ",
    text: "Society",
  },
];

function HomeScreen() {
  return (
    <div className="position-relative">
      <Carousel>
        <Carousel.Item>
          <a
            href="https://financialservices.gov.in/ecoffee_table_book/index.html "
            target="_blank"
            role="link"
          >
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xVt38XITOZIKAjjmJzoqxIT5fzbuhQk8Fw&usqp=CAU"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://www.mygov.in/group-issue/inviting-ideas-mann-ki-baat-prime-minister-narendra-modi-28th-august-2022/?target=inapp&type=group_issue&nid=333371"
            target="_blank"
            role="link"
          >
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xVt38XITOZIKAjjmJzoqxIT5fzbuhQk8Fw&usqp=CAU"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://financialservices.gov.in/digital_archive/akam-xml-new/index.html"
            target="_blank"
            role="link"
          >
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xVt38XITOZIKAjjmJzoqxIT5fzbuhQk8Fw&usqp=CAU"
            />
          </a>
        </Carousel.Item>
      </Carousel>

      <container className="mx-5">
        <Row>
          <h2
            data-text="Practice Areas"
            style={{ color: "white" }}
            className="mt-5"
          >
            <i>Practice Areas</i>
          </h2>
        </Row>
        <div class="mt-5 d-flex flex-wrap">
          {/* <CardGroup > */}
          {practiceArea.map((item, key) => {
            return (
              <Card key={key} className="m-2 areas">
                <Card.Body>
                  <Card.Title className="justify-content-between">
                    <i className={`fa-solid ${item.icon}`}></i> {item.text}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
          {/* </CardGroup> */}
        </div>
      </container>

      <div className="mt-5">
        <Row>
          <div classname="text">
            <h2
              data-text="Step Guide"
              style={{ color: "white" }}
              className="mt-5"
            >
              <i>Step Guide</i>
            </h2>
          </div>
        </Row>
        <div>
          <div className="mx-5 mt-4">
            <iframe
              src="https://youtu.be/bbcSVu-kr2o"
              width="100%"
              height="400"
              frameborder="3"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Row>
          <div classname="text">
            <h2
              data-text="Smart Parking System"
              style={{ color: "white" }}
              className="mt-5"
            >
              <i>Smart Parking System</i>
            </h2>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;
