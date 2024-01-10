import { useEffect } from "react";
import { SINGLE_RESTRAUNT_INFO } from "../../constants";
import "./ResMenuPage.css";
import { useState } from "react";
import Shimmer from "../../components/Shimmer/Shimmer";

const ResMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResInfo();
  }, []);
  const fetchResInfo = async () => {
    const res = await fetch(SINGLE_RESTRAUNT_INFO);
    const data = await res.json();
    console.log(data);
    setResInfo(data);
  };
  if (!resInfo) return <Shimmer />;

  const resName = resInfo.data.cards[0].card.card.info.name;

  return (
    <div className="menu ">
      <div className="container">
        <div className="card-1">
          <div className="res-details">
            <h1 className="name">Chicago Pizza</h1>
            <p className="cuisines">Fast Food, Pizzas</p>
            <address className="res-add">bhuteswar road</address>
          </div>
          <div className="res-rating">
            <div className="rating">
              <span className="star">⭐</span>
              <span className="rating-digit">4.1</span>
            </div>
            <div className="rating-count">20+ rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenuPage;
