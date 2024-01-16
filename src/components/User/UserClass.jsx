import "./User.css";
import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countClass: 0,
      countClass2: 22,
    };

    console.log(props);
  }

  render() {
    const { name, location } = this.props;
    const { countClass, countClass2 } = this.state;
    return (
      <div className="user-cls">
        <h1>Name: {name}</h1>
        <h2>This is My Swiggy Clone Website Class</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: Saurav3class@gmail.com</h3>
        <div className="set">
          <h2>Count - {countClass}</h2>
          <div className="btn-set">
            <button
              className="btn-sub"
              onClick={() => {
                this.setState({
                  countClass: this.state.countClass - 1,
                  countClass2: this.state.countClass2 - 2,
                });
              }}
            >
              -
            </button>
            <button
              className="btn-add"
              onClick={() => {
                this.setState({
                  countClass: this.state.countClass + 1,
                  countClass2: this.state.countClass2 + 2,
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        <h2>Count - {countClass2}</h2>
      </div>
    );
  }
}

export default UserClass;
