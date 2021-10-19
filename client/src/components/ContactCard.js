import React from "react";
import "./ContactCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { deleteContact } from "../JS/action/contacts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const result = window.confirm("are you sure");
    if (result) {
      dispatch(deleteContact(contact._id));
    }
  };
  return (
    <div>
      <aside class="profile-card">
        <header>
          <a href="#">
            <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
          </a>

          <h1>{contact.name}</h1>

          <h2>- Full Stack Web Developer -</h2>
        </header>

        <div class="profile-bio">
          <p>Hello there!</p>
          <p>
            I am a full stack web developer. I mainly work with PHP, HTML, CSS,
            JS and WordPress.
            <br />I also play well with Photoshop, Corel Draw, After Effects and
            other cool stuff.
          </p>
        </div>
        <ul class="profile-social-links">
          {/* <li>
      <a href="https://twitter.com/tutsplus">
        <img src="">
      </a>
    </li> */}

          {/* <li>
      <a href="https://envato.com">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg">
      </a>
    </li> */}

          {/* <li>
      <a href="https://codepen.io/tutsplus">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg">
      </a>
    </li> */}
        </ul>
      </aside>
      <h1 style={{ textAlign: "center" }}> {contact.name} </h1>

      <div className="actions">
        {/* <EditIcon /> */}
        <DeleteIcon onClick={handleDelete} />
        <Link to="/addPerson">
          {" "}
          <Link to={`/editContact/${contact._id}`}>
            {" "}
            <EditIcon />{" "}
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
