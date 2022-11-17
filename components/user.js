import React from "react";

const User = ({ user }) => {
  const { name, phone } = user;
  return (
    <li>
      <p>Name: {name}</p>
      <p>Phone number: {phone}</p>
    </li>
  );
};

export default User;
