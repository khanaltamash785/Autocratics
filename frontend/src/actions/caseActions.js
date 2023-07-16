import axios from 'axios'
import {
    CASES_CREATE_REQUEST,
    CASES_CREATE_SUCCESS,
    CASES_CREATE_FAIL,
  } from "../constants/caseConstants";

  export const createCases = (cases) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CASES_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/cases/add/`,
            cases,
            config
        )

        dispatch({
            type: CASES_CREATE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: CASES_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}