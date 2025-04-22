import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);

export default ContactList;
