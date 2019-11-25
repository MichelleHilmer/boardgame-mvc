import React from 'react';
import axios from 'axios';

class GameForm extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        gameName: '',
        minNumOfPlayers: '',
        maxNumOfPlayers: '',
        minLengthOfGame: '',
        maxLengthOfGame: '',
        description: '',
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/game/new', this.state)
        .then(res => {
            console.log(res);
        })
    }

    render() {
        const { gameName, minNumOfPlayers, maxNumOfPlayers, minLengthOfGame, maxLengthOfGame, description} = this.state
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Title:
                <input type="text" name='gameName' value={gameName} onChange={this.changeHandler}/>
                </label>
                <br />
                <label>
                Length of game:
                <input type="int" name='minLengthOfGame' value={minLengthOfGame} onChange={this.changeHandler}/>
                minutes to
                <input type="int" name='maxLengthOfGame'  value={maxLengthOfGame} onChange={this.changeHandler}/>
                minutes
                </label>
                <br />
                <label>
                Number of Players
                <input type='int' name='minNumOfPlayers' value={minNumOfPlayers} onChange={this.changeHandler}/>
                people to
                <input type='int' name='maxNumOfPlayers' value={maxNumOfPlayers} onChange={this.changeHandler}/>
                </label>
                <br />
                <label>
                Description:
                    <input type="text" name='description'value={description} onChange={this.changeHandler}/>
                </label> 
                <br />
                <button type="submit">Add</button>
                </form>
                </div>
        )
    }
}
export default GameForm


 