import React, { Component } from "react";
import "../../styles.css";
// style
import { Button } from "antd";

class UpDownClass extends Component {
  render() {
    const { onUp, onDown, times } = this.props;
    return (
      <div className="App">
        <h3> React Class Component</h3>
        <h3>Totals: {times}</h3>
        <Button type="primary" onClick={() => onUp(1)}>
          Up (+)
        </Button>
        <Button type="primary" danger onClick={() => onDown(1)}>
          Down (-)
        </Button>
      </div>
    );
  }
}

export default UpDownClass;
