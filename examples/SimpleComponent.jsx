import React from "react";

class SimpleComponent extends React.Component {
  render() {
    return <p>Hello from SimpleComponent!</p>;
  }
}
export function help() {
  console.log("help me");
}
export const power = {
  level: 0,
};
export default SimpleComponent;
