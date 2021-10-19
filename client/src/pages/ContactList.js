import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact } from "../JS/action/contacts";

import ContactCard from "../components/ContactCard";
import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const isLoad = useSelector((state) => state.contactReducer.isLoad);
  const isError = useSelector((state) => state.contactReducer.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);
  return (
    <div>
      <h1> Profiles list </h1>
      {isLoad ? (
        // <Box sx={{ display: "flex" }}>
        //   <CircularProgress />
        // </Box>
        <div className="loading">Loading&#8230</div>
      ) : isError ? (
        <p>Error To get The contacts</p>
      ) : (
        <div className="contactList">
          {contacts &&
            contacts.map((el) => (
              <ContactCard contact={el} key={el._id} />
            ))}{" "}
        </div>
      )}
    </div>
  );
};

export default ContactList;
