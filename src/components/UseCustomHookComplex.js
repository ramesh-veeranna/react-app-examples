import React from 'react'
import useCounter from '../hooks/useCounter'

function UseCustomHookComplex() {
    const [count, increment, decrement, reset] = useCounter(10, 2)
    return (
        <div className='mt-4'>
            <h4>Count: {count}</h4>
            <button className='btn btn-success' onClick={increment}>Increment</button>
            <button className='btn btn-danger mx-2' onClick={decrement}>Decrement</button>
            <button className='btn btn-primary px-4' onClick={reset}>Reset</button>
        </div>
    )
}

export default UseCustomHookComplex
