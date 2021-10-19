import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_ONE_CONTACT,
} from "../constants/contacts";
import axios from "axios";

export const getAllContact = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });

  try {
    let result = await axios.get("/api/person");
    // if i send an http request result bech tekho objet { status , headers ,data li jet mel api }
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: result.data, // (hedhy tji feha un objet fih msg w contacts)
    });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL });
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    await axios.delete(`/api/person/deletePerson/${id}`);
    dispatch(getAllContact());
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL });
    console.log(error);
  }
};

export const addPerson = (contact, history) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    await axios.post("/api/person", contact);
    dispatch(getAllContact());
    history.push("/contacts");
  } catch (error) {
    dispatch({ GET_CONTACTS_FAIL });
  }
};

export const getOneContact = (id) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get(`/api/person/${id}`);
    dispatch({ type: GET_ONE_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL });
  }
};

export const EditPerson = (id, contact) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    await axios.put(`/api/person/updatePerson/${id}`, contact);
    dispatch(getAllContact());
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL });
  }
};
