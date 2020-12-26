import React from "react";
import iceCreamSvg from "../public/assets/undraw_ice_cream.svg";
import hotChocolateSvg from "../public/assets/undraw_hot_beverage.svg";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!! Want some ice-cream before that??",
    imgSrc: iceCreamSvg
  },
  winter: {
    text: "Burr, its chilly!! Want some hot chocolate??",
    imgSrc: hotChocolateSvg
  }
};

function getSeason(latitude, month) {
  if (month >= 3 && month <= 8) {
    return latitude >= 0 ? "summer" : "winter";
  } else {
    return latitude >= 0 ? "winter" : "summer";
  }
}

export default function SeasonDisplay(props) {
  if (!props.latitude && !props.errorMessage) return null;

  const currSeason = getSeason(props.latitude, new Date().getMonth());
  const { text, imgSrc } = seasonConfig[currSeason];

  if (props.latitude) {
    return (
      <div className="season-display">
        <h1>{text}</h1>
        <img src={imgSrc} alt={text} />
      </div>
    );
  } else {
    return (
      <div className="ui season-display">
        <h1>{props.errorMessage}</h1>
      </div>
    );
  }
}
