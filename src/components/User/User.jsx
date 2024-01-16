import "./User.css";

const User = ({ name, location }) => {
  return (
    <div className="user-fn">
      <h1>Name: {name}</h1>
      <h2>This is My Swiggy Clone Website Function</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: Saurav345@gmail.com</h3>
    </div>
  );
};

export default User;
