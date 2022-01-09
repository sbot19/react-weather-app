import React from "react";

export default function Background(props) {
  return (
    <img
      src={`/images/backgrounds/${props.code}.gif`}
      alt="Current weather background"
      className="bg"
      /* bg = background */
    />
  );
}
