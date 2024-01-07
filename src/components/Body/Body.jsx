/* eslint-disable react/prop-types */
import CardsContainer from "../CardsContainer/CardsContainer";
import ResCard from "../ResCard/ResCard";
import "./Body.css";

const Body = ({ resList, handleTopRated, handleAllRes, handleFastest }) => {
  return (
    <main className="main-container">
      <div className="container ">
        <div className="filter">
          <button className="filter-btn" onClick={handleAllRes}>
            All Restraunts
          </button>
          <button className="filter-btn" onClick={handleTopRated}>
            Top Rated
          </button>
          <button className="filter-btn" onClick={handleFastest}>
            Fastest Delivery
          </button>
        </div>
        <CardsContainer>
          {resList.map((res) => (
            <ResCard key={res.info.id} res={res} />
          ))}
        </CardsContainer>
      </div>
    </main>
  );
};

export default Body;
