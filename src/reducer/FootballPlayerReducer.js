import * as types from '../actions/actionTypes';
import initialState from './initialState';

const today = new Date();

export default function footballPlaterReducer(state = initialState.players, action) {
  switch (action.type) {
    case types.LOAD_FOOTBALL_PLAYERS:
      return action.players;
    default:
      return state;
  }
}
