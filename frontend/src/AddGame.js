import React from 'react';
import axios from 'axios';

export default class GameList extends React.Component {
    state = {
        name:'',
        minNumOfPlayers:'',
        maxNumOfPlayers:'',
        minLengthOfGame:'',
        maxLengthOfGame:'',
        description:'',
    }

    handleChange = event =>{
        this.setState({ name: event.target.value},
            {min_num_of_players: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const game = {
            name: this.state.name,
            minNumOfPlayers: this.state.minNumOfPlayers,
            maxNumOfPlayers: this.state.maxNumOfPlayers,
            minLengthOfGame: this.state.minLengthOfGame,
            maxLengthOfGame: this.state.maxLengthOfGame,
            description: this.state.description
        };

        axios.post('http://localhost:8080/game', { game })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Title:
                <input type="text" name='name' />
                </label>
            <br />
            <label>
            Length of game:
            <input type="int" name='minLengthOfGame' />
            minutes to
            <input type="int" name='maxLengthOfGame' />
            minutes
            </label>
            <br />
            <label>
            Number of Players
            <input type='int' name='minNumOfPlayers' />
            people to
            <input type='int' name='maxNumOfPlayers' />
            </label>
            <br />
            <label>
            Description:
                <textarea name='description'>Please enter a description of this game =D!</textarea>
            </label>
            <br />
            <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}

 