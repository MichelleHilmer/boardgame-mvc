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
                {this.state.games.map(game =><div> <li>Game Title : {game.gameName}</li>
                <li># of Players : {game.minNumOfPlayers} players to {game.maxNumOfPlayers} players</li>
                <li>Game Length : {game.minLengthOfGame} minutes to {game.maxLengthOfGame} minutes</li>
                <li>Game Description : {game.description}</li>
                ----------------------------------------------------------
                
                </div>
                )}
            </ul>
        );
    }
}


export default GameList