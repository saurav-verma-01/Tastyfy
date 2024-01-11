import { useEffect } from "react";
import { SINGLE_RESTRAUNT_INFO } from "../../constants";
import "./ResMenuPage.css";
import { useState } from "react";
import Shimmer from "../../components/Shimmer/Shimmer";
import MenuItem from "../../components/MenuItem/MenuItem";

const ResMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResInfo();
  }, []);
  const fetchResInfo = async () => {
    const res = await fetch(SINGLE_RESTRAUNT_INFO);
    const data = await res.json();
    setResInfo(data);
  };
  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    locality,
    brandHeaderText,
    totalRatingsString,
    avgRatingString,
  } = resInfo.data.cards[0].card.card.info;

  const discountText =
    resInfo.data.cards[0].card.card.info.aggregatedDiscountInfoV2
      .descriptionList[0].meta;

  const discountText2 =
    resInfo.data.cards[0].card.card.info.aggregatedDiscountInfoV2
      .descriptionList[0].meta;

  const menuList = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  return (
    <div className="menu ">
      <div className="container">
        <div className="card-1">
          <div className="flex-card">
            <div className="res-details">
              <p className="single-res-name">{name}</p>
              <p className="single-res-cuisines">{cuisines.join(", ")}</p>
              <address className="single-res-add">
                {areaName || locality}
              </address>
            </div>
            <div className="res-rating">
              <div className="rating">
                <span className="star">⭐</span>
                <span className="rating-digit">{avgRatingString}</span>
              </div>
              <hr className="line" />
              <div className="rating-count">{totalRatingsString}</div>
            </div>
          </div>
          <p className="delivery">{discountText + " " + discountText2}</p>
        </div>

        <div className="card-2">
          {brandHeaderText && (
            <h2 className="brandHeader">{brandHeaderText}</h2>
          )}

          {menuList.map((listItem) => (
            <MenuItem info={listItem} />
          ))}
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default ResMenuPage;
