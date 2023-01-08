import React from "react";
import "./Feature.css";

function Feature({ image, name }) {
  return (
    <>
      <img
        data-testId="featureImg"
        src={image}
        alt={name}
        className="promosImg"
      />
    </>
  );
}

export default Feature;
