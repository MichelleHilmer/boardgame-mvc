import React from 'react';

class Game extends React.Component {
    render(){
        return(
            <div>
            <form inline={true}>
                Title:
                <input type="text" name='name' />
            <br />
            Length of game:
            <input type="int" name='min_length_of_game' />
            minutes to
            <input type="int" name='max_length_of_game' />
            minutes
            <br />
            Number of Players
            <input type='int' name='min_num_of_players' />
            people to
            <input type='int' name='max_num_of_players' />
            <br />
            Description:
                <textarea name='description'>Please enter a description of this game =D!</textarea>
            <br />
            <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}


export default Game