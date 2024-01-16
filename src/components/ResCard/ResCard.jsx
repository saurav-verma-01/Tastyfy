/* eslint-disable react/prop-types */
import { IMAGE_URL } from "../../constants";
import { FaStar } from "react-icons/fa";
import "./ResCard.css";

const ResCard = ({ res }) => {
  const resImgId = res?.info?.cloudinaryImageId;
  const resImg = IMAGE_URL + resImgId;
  const discountSubHeader = res?.info?.aggregatedDiscountInfoV3?.subHeader;
  const discountHeader = res?.info?.aggregatedDiscountInfoV3?.header;
  const discountText = `${discountHeader} ${discountSubHeader}`;
  const discountname = res?.info?.name;
  const time = res?.info?.sla?.deliveryTime;
  const rating = res?.info?.avgRating;
  const cuisines = res?.info?.cuisines?.join(", ");
  const areaName = res?.info?.areaName;
  const locality = res?.info?.locality;

  console.log(res);
  return (
    <div className="res-card">
      <div className="img-box">
        <img src={resImg} alt="restraunt banner" className="res-img" />
        <p className="discount-text">{discountText}</p>
      </div>
      <div className="details-box">
        <h3 className="res-name">{discountname}</h3>
        <div className="summary-box">
          <div className="rating-box">
            <div className="star-box">
              <FaStar className="star" />
            </div>
            <p className="rating">{rating}</p> <span className="dot"> | </span>
          </div>
          <div className="time-box">
            <p className="time">{time} mins</p>
          </div>
        </div>
        <p className="cuisines">{cuisines}</p>
        <address>{areaName || locality}</address>
      </div>
    </div>
  );
};

export default ResCard;
