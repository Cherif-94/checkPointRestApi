import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, getOneContact, EditPerson } from "../JS/action/contacts";
import { useHistory, useParams } from "react-router";
import "./AddContact.css";
const AddContact = () => {
  const [contact, setContact] = useState({});
  const [edit, setEdit] = useState(false);
  const editPerson = useSelector((state) => state.contactReducer.onePerson);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    if (contact.name) {
      if (edit) {
        dispatch(EditPerson(params.id, contact));
      } else {
        dispatch(addPerson(contact, history));
      }
      alert("user saved succesfully");
    } else {
      alert("name is required");
    }
  };
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      dispatch(getOneContact(params.id));
      setEdit(true);
    } else {
      setEdit(false);
    }
    edit
      ? setContact(editPerson)
      : setContact({ name: "", age: "", favoriteFood: "" });
  }, [edit, params.id]);

  return (
    <div className="formulaire">
      <div class="form">
        <div class="title">Welcome</div>

        <div class="subtitle">
          {" "}
          {edit ? "Let's edit the person!" : "Let's add one person!"}{" "}
        </div>
        <div class="input-container ic1">
          <input
            onChange={handleChange}
            name="name"
            id="name"
            class="input"
            type="text"
            placeholder=" "
            value={editPerson.name}
          />
          <div class="cut"></div>
          <label for="name" class="placeholder">
            name
          </label>
        </div>
        <div class="input-container ic2">
          <input
            onChange={handleChange}
            name="age"
            id="age"
            class="input"
            type="number"
            placeholder=" "
            value={editPerson.age}
          />
          <div class="cut"></div>
          <label for="age" class="placeholder">
            Age
          </label>
        </div>
        <div class="input-container ic2">
          <input
            onChange={handleChange}
            name="favoriteFood"
            id="favoriteFood"
            class="input"
            type="text"
            placeholder=" "
            value={editPerson.favoriteFood}
          />
          <div class="cut cut-short"></div>
          <label for="favoriteFood" class="placeholder">
            favorite-Food
          </label>
        </div>
        <button onClick={handleSave} type="submit" class="submit">
          {edit ? "EDIT" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default AddContact;
