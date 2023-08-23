import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

export default function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Number Of Cakes: {numOfCakes}</h4>
            <button className='btn btn-primary' onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

