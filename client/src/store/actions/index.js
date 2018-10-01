import { KILL_WASP, KILL_MANY_WASPS } from '../constants/action-types.js';

export const killWasp = () => ({type: KILL_WASP});
export const killManyWasps = (count)=>({type: KILL_MANY_WASPS, payload: count});
