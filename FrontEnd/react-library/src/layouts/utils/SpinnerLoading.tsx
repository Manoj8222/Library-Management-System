import React from "react";

const SpinnerLoading = () => {
  return (
    <div
      className="container m-auto d-flex justify-content-center f"
      style={{ height: 550 }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerLoading;
