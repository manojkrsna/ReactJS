import * as types from "./actionTypes";
import * as mobileApi from "../../api/mobileApi";

export function loadMobileSuccess(mobiles) {
  return { type: types.LOAD_MOBILES_SUCCESS, mobiles };
}



export function loadMobiles() {
  return function (dispatch) {
    return mobileApi
      .getMobiles()
      .then(mobiles => {
        dispatch(loadMobileSuccess(mobiles));
      })
      .catch(error => {
        throw error;
      });
  };
}

