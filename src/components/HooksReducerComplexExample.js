import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstIncrement':
            return { ...state, firstCount: state.firstCount + action.value }
        case 'firstDecrement':
            return { ...state, firstCount: state.firstCount - action.value }
        case 'secondIncrement':
            return { ...state, secondCount: state.secondCount + action.value }
        case 'secondDecrement':
            return { ...state, secondCount: state.secondCount - action.value }
        case 'Reset':
            return initialState
        default:
            return state
    }
}

function HooksReducerComplexExample() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <hr />
            <h2>Reducer Complex Example:</h2>
            <h4>First Count: {count.firstCount} </h4>
            <button onClick={() => dispatch({type: 'firstIncrement', value: 2})} className='btn btn-sm btn-success mx-2'>First Increment</button>
            <button onClick={() => dispatch({type: 'firstIncrement', value: 5})} className='btn btn-sm btn-success mx-2'>First Increment 5</button>
            <button onClick={() => dispatch({type: 'firstDecrement', value: 2})} className='btn btn-sm btn-danger mx-2'>First Decrement</button>
            <button onClick={() => dispatch({type: 'firstDecrement', value: 5})} className='btn btn-sm btn-danger mx-2'>First Decrement 5</button>
            <br/>
            <h4>Second Count: {count.secondCount}</h4>
            <button onClick={() => dispatch({type: 'secondIncrement', value: 2})} className='btn btn-sm btn-success mx-2'>Second Increment</button>
            <button onClick={() => dispatch({type: 'secondIncrement', value: 5})} className='btn btn-sm btn-success mx-2'>Second Increment 5</button>
            <button onClick={() => dispatch({type: 'secondDecrement', value: 2})} className='btn btn-sm btn-danger mx-2'>Second Decrement</button>
            <button onClick={() => dispatch({type: 'secondDecrement', value: 5})} className='btn btn-sm btn-danger mx-2'>Second Decrement 5</button>
            <br/>
            <br/>
            <button onClick={() => dispatch({type: 'Reset'})} className='btn btn-sm btn-primary mx-2 px-4'>Reset</button>
        </div>
    )
}

export default HooksReducerComplexExample
