import React from 'react'
import { Card } from 'react-bootstrap'


function Arbitrator({notification}) {
  return (
    <Card  className='my-3 py-3 rounded'>
      <a
      className='App-link'
      href={notification.link}
      target='_blank'
      rel='noopener noreferrer'
      >
        <Card.Img style={{ height: '5rem' }} src={notification.image} />
      </a>
      <a
      style={{textDecoration: 'none'}}
      className='App-link'
      href={notification.link}
      target='_blank'
      rel='noopener noreferrer'
      >
        <Card.Body>
              <Card.Title as='div'>
                <strong>{notification.descriptions}</strong>
              </Card.Title>
        </Card.Body>
      </a>
    </Card>
  )
}

export default Arbitrator