/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import ResCard from "../ResCard/ResCard";
import "./Body.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

const dummyArr = Array.from({ length: 12 });

const Body = ({
  displayList,
  handleTopRated,
  handleAllRes,
  handleFastest,
  onSearch,
  searchError,
  resHeadline,
}) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <main className="main-container">
      <div className="container ">
        <h2 className="res-headline">{resHeadline}</h2>
        <div className="filter">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchText}
              className="search-box"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <input type="submit" value="🔍" className="submit" />
          </form>
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
          {searchError ? (
            <p className="not-found-text">No Matching results found.</p>
          ) : displayList.length === 0 ? (
            dummyArr.map((_, index) => <Shimmer key={index} />)
          ) : (
            displayList.map((res) => (
              <Link to={`/restraunts/${res.info.id}`} key={res.info.id}>
                <ResCard res={res} />
              </Link>
            ))
          )}
        </CardsContainer>
      </div>
    </main>
  );
};

export default Body;
