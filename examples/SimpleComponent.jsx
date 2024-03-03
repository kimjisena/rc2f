import React from "react";

const hello = "hello";
let world = "world";

function heavyTask() {
  console.log("heavy task here!");
}

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
