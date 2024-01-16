import { useEffect, useState } from "react";
import Body from "../../components/Body/Body";

import { SWIGGY_API_URL } from "../../constants";

// const resArr =
//   resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
const App = () => {
  const [resList, setResList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [resHeadline, setResHeadline] = useState("");

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
    console.log(fetchedData.data.cards);
    setResHeadline(fetchedData?.data?.cards[3]?.card?.card?.title);
    setResList(
      fetchedData?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle
        .restaurants
    );
    // console.log(resList);
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
  };

  return (
    <div>
      <Body
        handleTopRated={filterTopRated}
        handleAllRes={getAllRes}
        handleFastest={getFastest}
        displayList={displayList}
        onSearch={handleSearch}
        searchError={searchError}
        resHeadline={resHeadline}
      />
      <h2>Footer is Here</h2>
    </div>
  );
};

export default App;
