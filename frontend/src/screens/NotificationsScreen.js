import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Arbitrator from '../components/Arbitrator'
import { listNotifications } from '../actions/notificationActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function NotificationsScreen() {
  const dispatch = useDispatch()
  const notificationList = useSelector(state => state.notificationList)
  const {error, loading, notifications} = notificationList

  useEffect (() => {
    dispatch(listNotifications())

  }, [dispatch])

  return (
    <div>
      {loading ? <Loader/>
        : error ? <Message variant='danger'>{error}</Message>
        : 
          <Row>
            {notifications.map(notification => (
              <Row key={notification._id}>
                <Arbitrator notification={notification} />
              </Row>
        ))}
          </Row>
      }
    </div>
  )
}

export default NotificationsScreen