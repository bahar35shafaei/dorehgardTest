export const SET_RECEIPT = "SET_RECEIPT";
export const GET_RECEIPT = "GET_RECEIPT";
export const RESET_RECEIPT = "RESET_RECEIPT";

const INITIAL_STATE = {
  logo: "",
  sender: {
    name: "",
    country: "",
    firstName: "",
    lastName: "",
    taxRegistrationNumber: "",
    email: "",
    address1: "",
    address2: "",
    phone: "",
    website: "",
  },
  receiver: {
    name: "",
    country: "",
    firstName: "",
    lastName: "",
    taxRegistrationNumber: "",
    email: "",
    address1: "",
    address2: "",
    phone: "",
    website: "",
  },
  invoiceNo: "",
  invoiceDate: "",
  due: "",
  invoices: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RECEIPT:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_RECEIPT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
