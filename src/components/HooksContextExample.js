import React, { useContext } from 'react'
import { UserContext } from '../App'

function HooksContextExample() {
    const user = useContext(UserContext)
    return (
        <div className='mt-4'>
            <h2>User: {user}</h2>
        </div>
    )
}

export default HooksContextExample
