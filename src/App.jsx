import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

import { SWIGGY_API_URL } from "./constants";
import Shimmer from "./Shimmer/Shimmer";
// const resArr =
//   resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
const App = () => {
  const [resList, setResList] = useState([]);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    fetchResData();
  }, []);

  useEffect(() => {
    setDisplayList(resList);
  }, [resList]);

  const fetchResData = async () => {
    const res = await fetch(SWIGGY_API_URL);
    const fetchedData = await res.json();
    console.log(fetchedData);
    // setting Res List to Fetched Data
    setResList(
      fetchedData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterTopRated = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating >= 4);
    setDisplayList(filteredRes);
  };

  const getAllRes = () => {
    setDisplayList(resList);
  };

  const getFastest = () => {
    const nearestRes = resList.filter((res) => res.info.sla.deliveryTime <= 25);
    setDisplayList(nearestRes);
  };

  const dummyArr = Array.from({ length: 12 });

  const ShimmerView = () => {
    return (
      <main className="main-container">
        <div className="container cards-container">
          {dummyArr.map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      </main>
    );
  };

  return (
    <div>
      <Navbar />

      {displayList.length === 0 ? (
        <ShimmerView />
      ) : (
        <Body
          handleTopRated={filterTopRated}
          handleAllRes={getAllRes}
          handleFastest={getFastest}
          displayList={displayList}
        />
      )}
    </div>
  );
};

export default App;
