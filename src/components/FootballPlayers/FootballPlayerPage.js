import React, { PropTypes } from 'react';
import FootballPlayerList from './FootballPlayerList';
import * as footballPlayers from '../../actions/playersActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as selectors from './FootballPlayerSelectors';

class FootballPlayerPage extends React.Component{




    ///Class constructor
    constructor(props, context){
        super(props, context);
    }

    componentWillMount(){
        console.log("componentWillMount");
        // footballPlayers.loadFootballPlayers();
    }

    render(){
        const players = this.props.players;
        console.log("player on view ", players);
        return(
            <div className="container-fluid">
                <header>
                    <h1>Football Player Finder</h1>
                </header>

                <div className="text-center">
                    <form>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="submit" value="test"/>
                    </form>
                    
                    <FootballPlayerList footballPlayers={players}/>
                </div>
            </div>
        );

    }
}

// function mapStateToProps(state, ownProps) {
//     console.log("State on view ", state);
//     return{
//       players: state.FootballPlayers
//     };
//   }
  
  const makeMapStateToProps = () => {
    const getVisibleTodos = selectors.calculateAge()
    const mapStateToProps = (state, props) => {
      return {
        players: getVisibleTodos(state, props)
      };
    };
    return mapStateToProps;
  }


  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(footballPlayers, dispatch)
    };
  }
  
export default connect(makeMapStateToProps, mapDispatchToProps)(FootballPlayerPage);