import React from "react";

export default function Spinner(props) {
  return (
    <div className={`spinner-container ${props.isLoading ? "show" : "hide"}`}>
      <div className="spinner-circle"></div>
      <div className="spinner-text">{props.message}</div>
    </div>
  );
}

Spinner.defaultProps = {
  message: "Loading..."
};
