import "../../App.css";
import * as React from "react";

function ContactItem({ key, image, name, email }) {
  return (
    <>
      <div className="container_contact_list">
        <img src={image} alt={name} className="user-image" />
        <div className="contact-detail">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <button id={"button" + key} className="button2">
          x
        </button>
      </div>
    </>
  );
}

export default ContactItem;
