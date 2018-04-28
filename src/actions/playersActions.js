import * as types from './actionTypes';
import axios from 'axios';

export function loadFootballPlayersSuccess(players) {
  return {type: types.LOAD_FOOTBALL_PLAYERS, players};
}

export function loadFootballPlayers() {
  return (dispatch) => {
    return axios.get("https://football-players-b31f2.firebaseio.com/players.json").then(players => {
      dispatch(loadFootballPlayersSuccess(players.data));
    }).catch(error => {
      throw(error);
    });
  };
}
