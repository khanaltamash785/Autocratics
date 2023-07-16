import { CART_SAVE_CLIENT_DETAILS, CART_SAVE_CASES_DETAILS } from '../constants/cartConstants'

export const cartReducer = (state = { clientDetails: {} }, action) => {
    switch (action.type) {

        case CART_SAVE_CLIENT_DETAILS:
            return {
                ...state,
                clientDetails: action.payload
            }

        case CART_SAVE_CASES_DETAILS:
            return {
                ...state,
                casesDetails: action.payload
            }

        default:
            return state
    }
}