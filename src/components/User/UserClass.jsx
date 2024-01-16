import "./User.css";
import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-cls">
        <h1>Name: {name}</h1>
        <h2>This is My Swiggy Clone Website Class</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: Saurav3class@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
