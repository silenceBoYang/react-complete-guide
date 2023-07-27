import { takeLatest } from "redux-saga-effects";
// import authSaga from "./authSaga";
// import productSaga from "./productSaga";
// import profileSaga from "./profileSaga";

function* rootSaga() {
  yield takeLatest(
    [
      "SIGNIN",
      "SIGNUP",
      "SIGNOUT",
      "SIGNIN_WITH_GOOGLE",
      "SIGNIN_WITH_FACEBOOK",
      "SIGNIN_WITH_GITHUB",
      "ON_AUTHSTATE_CHANGED",
      "ON_AUTHSTATE_SUCCESS",
      "ON_AUTHSTATE_FAIL",
      "SET_AUTH_PERSISTENCE",
      "RESET_PASSWORD",
    ]
    // authSaga
  );
  yield takeLatest(
    [
      "ADD_PRODUCT",
      "SEARCH_PRODUCT",
      "REMOVE_PRODUCT",
      "EDIT_PRODUCT",
      "GET_PRODUCTS",
    ]
    // productSaga
  );
  //   yield takeLatest([ACTION.UPDATE_EMAIL, ACTION.UPDATE_PROFILE], profileSaga);
}

export default rootSaga;
