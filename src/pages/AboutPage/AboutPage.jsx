import User from "../../components/User/User";
import UserClass from "../../components/User/UserClass";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about page">
      <div className="container">
        <User name={"Saurav Verma - Function"} location={"Mathura Function"} />

        <UserClass name={"Saurav Verma - Class"} location={"Mathura Class"} />
      </div>
    </div>
  );
};

export default AboutPage;
