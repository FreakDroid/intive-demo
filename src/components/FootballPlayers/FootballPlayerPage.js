import React, { PropTypes } from 'react';

class FootballPlayerPage extends React.Component{

    ///Class constructor
    constructor(props, context){
        super(props, context);
    }

    render(){
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
                </div>
            </div>
        );

    }
}

export default FootballPlayerPage;