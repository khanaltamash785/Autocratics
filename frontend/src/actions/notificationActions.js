import axios from 'axios'
import { 
    NOTIFICATION_LIST_REQUEST,
    NOTIFICATION_LIST_SUCCESS,
    NOTIFICATION_LIST_FAIL
 } from '../constants/notificationConstants'

 export const listNotifications = () => async (dispatch) => {
    try {
        dispatch({ type: NOTIFICATION_LIST_REQUEST })

        const {data} = await axios.get('/api/notifications/')

        dispatch({
            type: NOTIFICATION_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NOTIFICATION_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
 }