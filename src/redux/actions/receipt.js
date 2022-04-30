import { RESET_RECEIPT, SET_RECEIPT, GET_RECEIPT } from "../reducers/receipt";

export const setReceipt = (dispatch) => {
  return { type: SET_RECEIPT, payload: dispatch };
};

export const getReceipt = () => {
  return { type: GET_RECEIPT };
};

export const resetReceipt = () => ({ type: RESET_RECEIPT });
