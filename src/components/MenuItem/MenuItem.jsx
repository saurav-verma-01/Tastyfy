import "./MenuItem.css";

const MenuItem = ({ info }) => {
  console.log(info);
  return (
    <div className="menu-item">
      <div className="item-info">
        <p className="item-name">Pav Bhaji</p>
        <p className="item-cost">Rs140</p>
        <p className="serves">
          Serves 1 | A delicious combo of mothwatering bhaji; served along with
          soft pav - perfect to fulfill your cravings.
        </p>
      </div>
      <div className="item-img-box">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tujfgr4ct9sp69n2qpir"
          alt="menui item"
          className="item-img"
        />
      </div>
    </div>
  );
};

export default MenuItem;
