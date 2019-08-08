import React from "react";

const Alert = ({ empty, exists }) => {
  let emptyAlert =
    "Ooops, no text provided! Please fill in the to do item field above!";
  let existsAlert =
    "The item already exists and can't be added! Please add a new one!";

  return (
    <div className="container mt-3 alert alert-danger text-center">
      {empty ? emptyAlert : null}
      {exists ? existsAlert : null}
    </div>
  );
};
export default Alert;
