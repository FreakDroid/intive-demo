import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const FootPlayerListRow = ({player}) =>{
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.position}</td>
      <td>{player.team}</td> 
      <td>{player.age}</td>   
    </tr>
  );
};

// AuthorRow.propTypes = {
//   author: PropTypes.object.isRequired,
//   deleteAuthor: PropTypes.func.isRequired
// };

export default FootPlayerListRow;