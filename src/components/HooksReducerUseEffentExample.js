import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'Failure':
            return {
                loading: false,
                data: {},
                error: 'Something went wrong@!'
            }
        default:
            return initialState
    }
}

function HooksReducerUseEffentExample() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(resposne => {
                dispatch({ type: 'Success', payload: resposne.data })
            })
            .catch(error => {
                dispatch({ type: 'Failure' })
            })
    }, [])

    return (
        <div>
            <h4>Data Fetching Using useReducer & UseEffect</h4>
            <p>{state.loading ? 'Loading' : state.data.title}</p>
            <p>{ state.error ?? null }</p>
        </div>
    )
}

export default HooksReducerUseEffentExample
