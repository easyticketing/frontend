import "./index.css";

const LoadingPage = () => {
  return (
    <div className="container">
      <div className="spinner"></div>
      <div className="loading-text">
        Please allow location access for better experience! 😇
      </div>
    </div>
  );
};

export default LoadingPage;
