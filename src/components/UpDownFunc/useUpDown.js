/**
 * Copyright (c) 2020 Mongker.
 * All rights reserved.
 * @author Mong 02/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Äáº¡i há»c CÃ´ng Nghá» Giao ThÃ´ng Váº­n Táº£i)
 */

import { useSelector, useDispatch } from 'react-redux'
//Acion
import { actionDown, actionUp } from "../../action/index";

function useUpDown() {
  const times = useSelector(state => state.MainReducers)
  const dispatch = useDispatch();
  const onUp = (data) => dispatch(actionUp(data));
  const onDown = (data) => dispatch(actionDown(data));
  return ({times, onUp, onDown});
}

export default useUpDown;
