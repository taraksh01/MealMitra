import "../styles/Shimmer.css";

const ShimmerContainer = () => {
  return (
    <div className="shimmer-container">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-image"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text"></div>
    </div>
  );
};

export default ShimmerContainer;
