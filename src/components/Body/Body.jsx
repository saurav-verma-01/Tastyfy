/* eslint-disable react/prop-types */
import ResCard from "../ResCard/ResCard";
import "./Body.css";

const Body = ({ resList }) => {
  return (
    <main className="main-container">
      <div className="container ">
        <div className="cards-container">
          {resList.map((res) => (
            <ResCard key={res.info.id} res={res} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;
