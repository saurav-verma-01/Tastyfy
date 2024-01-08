import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

import { SWIGGY_API_URL } from "./constants";

// const resArr =
//   resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
const App = () => {
  const [resList, setResList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    fetchResData();
  }, []);

  useEffect(() => {
    setDisplayList(resList);
  }, [resList]);

  const fetchResData = async () => {
    const res = await fetch(SWIGGY_API_URL);
    const fetchedData = await res.json();

    // setting Res List to Fetched Data
    // console.log("After Fetching Restraunt Data");
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

  const handleSearch = (searchTerm) => {
    // Added a Guard Clause to avoid empty search
    if (searchTerm.trim().length < 3) {
      setSearchError(false);
      setDisplayList(resList);
      return;
    }

    const matchingRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchingRes.length === 0) {
      setDisplayList([]);
      setSearchError(true);
    } else {
      setDisplayList(matchingRes);
    }

    // setDisplayList(matchingRes);
  };

  return (
    <div>
      <Navbar />

      <Body
        handleTopRated={filterTopRated}
        handleAllRes={getAllRes}
        handleFastest={getFastest}
        displayList={displayList}
        onSearch={handleSearch}
        searchError={searchError}
      />
    </div>
  );
};

export default App;
