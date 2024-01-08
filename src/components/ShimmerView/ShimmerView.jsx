import Shimmer from "../../Shimmer/Shimmer";

const dummyArr = Array.from({ length: 12 });

const ShimmerView = () => {
  return (
    <main className="main-container">
      <div className="container cards-container">
        {dummyArr.map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </main>
  );
};

export default ShimmerView;
