import React from 'react';

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    deadWasps: state.deadWasps
  };
};

const mapDispatchToProps = null;

const BugCounter = function(props) {
  return (
    <div>
      You hunted {props.deadWasps} waps. Good job!
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BugCounter);
