import React from 'react';

import { connect } from "react-redux";
import { killWasp } from '../../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    killWasp: ()=>dispatch(killWasp())
  };
};

const BugButton = function(props) {
  return (
    <button onClick={()=>props.killWasp()}>
      HUNT WASP
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BugButton);
