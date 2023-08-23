import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function HooksReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <hr />
            <h4>Reducer Example: Count: {count}</h4>
            <button onClick={() => dispatch('increment')} className='btn btn-sm btn-success mx-2'>Increment</button>
            <button onClick={() => dispatch('decrement')} className='btn btn-sm btn-danger mx-2'>Decrement</button>
            <button onClick={() => dispatch('reset')} className='btn btn-sm btn-primary px-4'>Reset</button>
        </div>
    )
}

export default HooksReducer
