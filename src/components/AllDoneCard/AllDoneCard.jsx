import React from "react";

const AllDoneCard = () => (
  <div className="container">
    <div
      className="alert alert-success d-flex flex-column text-center mt-4"
      style={{ height: "23vh", padding: "2vh 0" }}
    >
      <div>
        <h4>
          All done! <br /> No more tasks today!
        </h4>
      </div>

      <div>
        <img
          className="mt-2"
          src="https://img.icons8.com/officel/80/000000/checked.png"
          alt="All done"
          height="64px"
        />
      </div>
    </div>
  </div>
);

export default AllDoneCard;
