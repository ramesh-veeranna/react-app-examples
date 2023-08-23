import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

export default function HooksIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Number Of IceCream: {numOfIceCream}</h4>
            <button className='btn btn-primary' onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}
