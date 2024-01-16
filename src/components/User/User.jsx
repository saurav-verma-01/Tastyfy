import { useState } from "react";
import "./User.css";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  return (
    <div className="user-fn">
      <h1>Name: {name}</h1>
      <h2>This is My Swiggy Clone Website Function</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: Saurav345@gmail.com</h3>
      <h2>Count - {count}</h2>
      <h2>Count 2 - {count2}</h2>
    </div>
  );
};

export default User;
