import React from 'react';
import { connect } from 'react-redux';

const Game = props => {
    function handleIncrement() {
        props.dispatch({
            type: "incrment",
        })
    }
    function handleDecrement() {
        props.dispatch({
            type: "decrement",
        })
    }

    console.log(props.gameReducer);
    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <button onClick={() => handleDecrement()}>-</button>
            value:{props.gameReducer.value}
        </div>

    )
}

export default connect(({ gameReducer }) => ({ gameReducer }))(Game);