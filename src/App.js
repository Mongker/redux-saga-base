/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mong 02/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Äáº¡i há»c CÃ´ng Nghá» Giao ThÃ´ng Váº­n Táº£i)
 */

import React from "react";
import PropTypes from "prop-types";
import UpDownContainer from "./components/UpDownClass";
import UpDownFunc from "./components/UpDownFunc/UpDownFunc";
import { Row, Col } from "antd";
function App() {
  return (
    <Row>
      <Col span={12}>
        <UpDownContainer />
      </Col>
      <Col span={12}>
        <UpDownFunc />
      </Col>
    </Row>
  );
}

App.propTypes = {};

App.defaultProps = {};

export default App;
