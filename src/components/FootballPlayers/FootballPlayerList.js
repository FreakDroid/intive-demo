import React, {PropTypes} from 'react';
import FootballPlayerListRow from './FootballPlayerListRow';

const FootballPlayerList = ({footballPlayers}) =>{
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Firts Name</th>
          <th>Last Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {footballPlayers.map(player=>
          <FootballPlayerListRow key={player.id} player={player} />)}
      </tbody>
    </table>
  );
};

// AuthorsList.propTypes ={
//   Authors: PropTypes.array.isRequired,
//   deleteAuthor: PropTypes.func.isRequired
// };

export default FootballPlayerList;