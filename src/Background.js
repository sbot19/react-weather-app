import React from "./react";

export default function Background(props) {
  return (
    <img
      src={window.location.origin + `images/backgrounds/${props.code}.gif`}
    />
  );
}
