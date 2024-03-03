import React, { creatRef, Component } from "react";
import Icon from "icon-lib";

class SimpleComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "john",
      age: 42,
    };
  }

  componentDidMount() {
    console.log("component mounted!");
  }
  componentDidUnmount() {
    console.log("component unmounted!");
  }
  componentDidUpdate() {
    console.log("component updated!");
  }
  componentDidCatch(error, info) {
    console.log("the error boundary");
  }
  componentWillMount() {
    console.log("component about to mount!");
  }
  componentWillReceiveProps(nextProps) {
    console.log("component about to receive props!");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("component about to update!");
  }
  componentWillUnmount() {
    console.log("component about to unmount!");
  }
  render() {
    return <p>Hello from SimpleComponent2!</p>;
  }
}
export default SimpleComponent2;
