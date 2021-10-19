import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_ONE_CONTACT,
} from "../constants/contacts";

const initialState = {
  contacts: [],
  isLoad: false,
  isError: false,
  onePerson: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: payload.peoplesList,
        isLoad: false,
      };
    case GET_CONTACTS_LOAD:
      return { ...state, isLoad: true };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        isLoad: false,
        isError: true,
      };
    case GET_ONE_CONTACT:
      return {
        ...state,
        onePerson: payload.onePerson,
        isLoad: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default contactReducer;
