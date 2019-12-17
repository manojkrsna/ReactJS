import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function mobileReducer(state = initialState.mobiles, action) {
  switch (action.type) {

    case types.LOAD_MOBILES_SUCCESS:
      return action.mobiles;
    default:
      return state;
  }
}
