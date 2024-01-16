import { IMAGE_URL } from "../../constants";
import "./ResMenuPage.css";

import Shimmer from "../../components/Shimmer/Shimmer";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../../utils/useRestrauntMenu";

const ResMenuPage = () => {
  const { resID } = useParams();

  const resInfo = useRestrauntMenu(resID);

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    locality,
    brandHeaderText,
    totalRatingsString,
    avgRatingString,
    cloudinaryImageId,
  } = resInfo.data.cards[0].card.card.info;

  const discountText =
    resInfo.data.cards[0].card.card.info.aggregatedDiscountInfoV2
      .descriptionList[0].meta;

  const discountText2 =
    resInfo.data.cards[0].card.card.info.aggregatedDiscountInfoV2
      .descriptionList[0].meta;

  const menuItems2 =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  const menuItems3 =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
      .itemCards;
  const menuItems4 =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
      .itemCards;

  console.log(resInfo);
  const allMenuItems = [...menuItems2, ...menuItems3, ...menuItems4];

  return (
    <div className="menu ">
      <div className="container">
        <div className="card-1">
          <div className="img-background">
            <img
              src={IMAGE_URL + cloudinaryImageId}
              alt="Restraunt Background"
            />
          </div>
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

          {allMenuItems.map((item) => (
            <MenuItem list={item} key={item.card.info.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResMenuPage;
