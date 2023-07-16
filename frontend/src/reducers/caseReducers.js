import {
  CASES_CREATE_REQUEST,
  CASES_CREATE_SUCCESS,
  CASES_CREATE_FAIL,
} from "../constants/caseConstants";

export const casesCreateRuducer = (state = {}, action) => {
  switch (action.type) {
    case CASES_CREATE_REQUEST:
      return {
        loading: true,
      };

    case CASES_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        cases: action.payload,
      };

    case CASES_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    
    default:
        return state
  }
};
