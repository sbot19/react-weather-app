import React from "react";

export default function Background(props) {
  return (
    <img
      src={require(`./images/backgrounds/${props.background}.gif`)}
      alt="Current weather background"
    />
  );
}
