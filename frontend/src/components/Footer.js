import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center'>Copyright &copy;Autocratics All rights reserved</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer