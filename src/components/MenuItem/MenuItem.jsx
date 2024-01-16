/* eslint-disable react/prop-types */

import { DISH_IMG_URL } from "../../constants";
import "./MenuItem.css";

const MenuItem = ({ list }) => {
  const { name, defaultPrice, description, price } = list.card.info;
  const imageID =
    list?.card?.info?.imageId ?? "c1cf54427a880530a70abeae704c2486";

  return (
    <div className="menu-item">
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-cost">Rs {(defaultPrice || price) / 100}</p>
        <p className="description">{description}</p>
      </div>
      <div className="item-img-box">
        <img
          src={DISH_IMG_URL + imageID}
          alt="menui item"
          className="item-img"
        />
      </div>
    </div>
  );
};

export default MenuItem;
