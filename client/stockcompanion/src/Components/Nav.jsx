import React, { useState } from "react";
import "./Nav.css";


// import your route components too

//if the button is active, then we should have the button region be lit up

function Nav() {
  
  return (
    <div className="nav">
      <div className="topbar">
        <button className="alert-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Nav;

//cards can be used for modularized compact ui element
//forms used for submittion portal (STOCK LOOKUP)

//need to figure out what I need for database in terms of remembering the metadata of this app
