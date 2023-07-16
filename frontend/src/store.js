import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { notificationListReducer } from "./reducers/notificationReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

import { cartReducer } from "./reducers/cartReducers";

import { casesCreateRuducer } from './reducers/caseReducers'

const reducer = combineReducers({
  notificationList: notificationListReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,

  cart: cartReducer,

  casesCreate: casesCreateRuducer,

});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const clientDetailsFromStorage = localStorage.getItem("clientDetails")
  ? JSON.parse(localStorage.getItem("clientDetails"))
  : {};

const casesDetailsFromStorage = localStorage.getItem("caseDetails")
  ? JSON.parse(localStorage.getItem("caseDetails"))
  : {};

const initialState = {
  cart: {
    clientDetails: clientDetailsFromStorage,
    casesDetails: casesDetailsFromStorage,
  },

  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
