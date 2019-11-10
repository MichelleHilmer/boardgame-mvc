import React from 'react';

import axios from 'axios';

class GameList extends React.Component {
    state ={
        games:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/game')
        .then(res => {
            const games = res.data;
            this.setState({ games });
            console.log(this.state.games)
        })
        
    }

    render(){
        return(
            <ul>
                {this.state.games.map(game =><div> <li>{game.name}</li>
                <li>{game.minNumOfPlayers}-{game.maxNumOfPlayers}</li>
                <li>{game.minLengthOfGame}- {game.maxLengthOfGame}</li>
                <li>{game.description}</li>
                ----------------------------------------------------------
                
                </div>
                )}
            </ul>
        );
    }
}


export default GameList