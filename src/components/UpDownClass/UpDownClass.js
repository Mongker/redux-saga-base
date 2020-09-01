import React, { Component, PropTypes } from "react";
import "../../styles.css";
// style
import { Button } from "antd";

class UpDownClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onUp, onDown, times } = this.props;
    return (
      <div className="App">
        <h3>Sử dụng React Class Component</h3>
        <h3>Totals: {times}</h3>
        <Button type="primary" onClick={() => onUp(1)}>
          Tăng (+)
        </Button>
        <Button type="primary" danger onClick={() => onDown(1)}>
          Giảm (-)
        </Button>
      </div>
    );
  }
}

export default UpDownClass;
