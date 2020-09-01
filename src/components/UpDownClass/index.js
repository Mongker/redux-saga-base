// Redux
import { connect } from "react-redux";

//Acion
import { actionDown, actionUp } from "../../action/index";

// components
import UpDownClass from "./UpDownClass";

const mapStateToProps = state => {
  const times =  state.MainReducers ? state.MainReducers : 0 
  debugger; // Todo by MongLV
  return {
    times
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUp: step => {
      debugger; // Todo by MongLV
      return dispatch(actionUp(step));
    },
    onDown: step => dispatch(actionDown(step))
  };
};

const UpDownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpDownClass);

export default UpDownContainer;
