/* eslint-disable react/prop-types */

import { DISH_IMG_URL } from "../../constants";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, defaultPrice, description, price } = item.card.info;
  const imageID =
    item?.card?.info?.imageId ?? "c1cf54427a880530a70abeae704c2486";

  return (
    <div className="menu-item">
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-cost">Rs {(defaultPrice || price) / 100}</p>
        <p className="description">{description}</p>
      </div>
      <div className="item-img-box relative">
        <img
          src={DISH_IMG_URL + imageID}
          alt="menui item"
          className="item-img"
        />
        <button className="bg-black text-white px-4 py-2 rounded-md absolute top-0 right-0">
          Add+
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
