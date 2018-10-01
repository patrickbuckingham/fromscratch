import { KILL_WASP, KILL_MANY_WASPS } from "../constants/action-types";

import update from 'immutability-helper';

const initialState = {
  deadWasps: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case KILL_WASP:
      return update(state, {$merge: {deadWasps: state.deadWasps+1}});
    default:
      return state;
  }
};

export default rootReducer;
