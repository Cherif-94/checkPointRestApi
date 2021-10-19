import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div class="logo">My app</div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <a>
              <Link to="/" class="active">
                {" "}
                Home{" "}
              </Link>
            </a>
          </li>
          <li>
            <a>
              {" "}
              <Link to="/contacts"> Profiles </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/AddContact"> Add profile </Link>
            </a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Feedback</a>
          </li>
        </ul>
      </nav>
      <div class="content"></div>
    </>
  );
}
