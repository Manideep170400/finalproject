import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import UserProfile from "../finalPage/mainPage";

function CreateTim() {
  return (
    <div className="header__wrapper">
      <div>
        <p
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          CreateTim
        </p>
        <Link to="/userProfile">UserProfile</Link>
      </div>
      <div>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

export default CreateTim;
