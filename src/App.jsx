import { useState } from "react";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

import { resData } from "./constants";
const resArr =
  resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

const App = () => {
  const [resList, setResList] = useState(resArr);

  const filterTopRated = () => {
    const filteredRes = resList.filter((res) => res.info.avgRating >= 4.4);
    setResList(filteredRes);
  };

  const getAllRes = () => {
    setResList(resArr);
  };

  const getFastest = () => {
    const nearestRes = resList.filter((res) => res.info.sla.deliveryTime <= 25);
    setResList(nearestRes);
  };

  return (
    <div>
      <Navbar />
      <Body
        resList={resList}
        handleTopRated={filterTopRated}
        handleAllRes={getAllRes}
        handleFastest={getFastest}
      />
    </div>
  );
};

export default App;
