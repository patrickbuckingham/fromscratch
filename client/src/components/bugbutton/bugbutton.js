import React from 'react';

const BugButton = function(props) {
  return (
    <button onClick={()=>props.killWasp()}>
      HUNT WASP
    </button>
  );
};

export default BugButton;
