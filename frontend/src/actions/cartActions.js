import { CART_SAVE_CLIENT_DETAILS, CART_SAVE_CASES_DETAILS } from '../constants/cartConstants'

export const saveClientDetails = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_CLIENT_DETAILS,
        payload: data,
    })

    localStorage.setItem('clientDetails', JSON.stringify(data))
}

export const saveCasesDetails = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_CASES_DETAILS,
        payload: data,
    })

    localStorage.setItem('casesDetails', JSON.stringify(data))
}