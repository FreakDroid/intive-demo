import React from 'react';
import FootballPlayerListRow from './FootballPlayerListRow';

const FootballPlayerList = ({footballPlayers}) =>{
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Position</th>
          <th>Team</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      {
        footballPlayers.map((player, i)=>
          <FootballPlayerListRow key={i++} player={player} />)
      }
      </tbody>
    </table>
  );
};

// AuthorsList.propTypes ={
//   Authors: PropTypes.array.isRequired,
//   deleteAuthor: PropTypes.func.isRequired
// };

export default FootballPlayerList;