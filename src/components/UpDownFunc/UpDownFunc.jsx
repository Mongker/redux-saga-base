/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mong 02/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Äáº¡i há»c CÃ´ng Nghá» Giao ThÃ´ng Váº­n Táº£i)
 */

import React, { Component, PropTypes } from "react";
import { useSelector, useDispatch } from "react-redux";
//Acion
import { actionDown, actionUp } from "../../action/index";
import useUpDown from "./useUpDown";
import "../../styles.css";
// style
import { Button } from "antd";

function UpDownFunc() {
  const { times, onUp, onDown } = useUpDown();

  return (
    <div className="App">
      <h3>React hooks</h3>
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

UpDownFunc.propTypes = {};

UpDownFunc.defaultProps = {};

export default UpDownFunc;
