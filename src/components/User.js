import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("rahul");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="border rounded-md p-5">
      <h2>Name : {name}</h2>
      <p>Location: {location}</p>
      <p>Contact : {contact}</p>
    </div>
  );
};

export default User;
