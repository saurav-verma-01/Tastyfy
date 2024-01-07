import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

import { resData } from "./constants";
const resList =
  resData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;

console.log(resList);
const App = () => {
  return (
    <div>
      <Navbar />
      <Body resList={resList} />
    </div>
  );
};

export default App;
