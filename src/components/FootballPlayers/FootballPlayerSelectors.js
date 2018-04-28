import { createSelector } from 'reselect';

const selectPlayer = (state) => state.FootballPlayers;
const today = new Date();

const calculateAge = () => createSelector(
    selectPlayer,
    (players) => { 
      players.map( player => { 
        let birthDate = new Date(player.dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        player.age = age;
      });
      return players;
    }
);

export {
    selectPlayer,
    calculateAge
};