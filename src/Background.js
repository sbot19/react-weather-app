import React from "react";

export default function Background(props) {
  return (
    <img
      src={`/images/backgrounds/${props.background}.gif`}
      alt="Current weather background"
    />
  );
}
