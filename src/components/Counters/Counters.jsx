import React from "react";

const Counters = ({ itemsDone, itemsLeft }) => (
  <div className="bg-dark">
    <div className="container d-flex p-3 bg-highlight">
      <div className="btn btn-success w-50 m-1">
        {`Completed `}
        <span className="badge badge-light ml-2">{itemsDone}</span>
      </div>
      <div className="btn btn-warning w-50 m-1">
        {`Left to do `}
        <span className="badge badge-light ml-2">{itemsLeft}</span>
      </div>
    </div>
  </div>
);

export default Counters;
