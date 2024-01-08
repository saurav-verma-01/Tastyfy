/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import ResCard from "../ResCard/ResCard";
import "./Body.css";

const Body = ({
  displayList,
  handleTopRated,
  handleAllRes,
  handleFastest,
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");

  // const onSearchSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(searchText);
  // };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText, onSearch]);

  return (
    <main className="main-container">
      <div className="container ">
        <div className="filter">
          <form className="search-bar">
            <input
              type="text"
              value={searchText}
              className="search-box"
              onChange={(e) => setSearchText(e.target.value)}
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
          {displayList.map((res) => (
            <ResCard key={res.info.id} res={res} />
          ))}
        </CardsContainer>
      </div>
    </main>
  );
};

export default Body;
