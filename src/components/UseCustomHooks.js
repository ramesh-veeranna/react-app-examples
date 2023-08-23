import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function UseCustomHooks() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div className='mt-4'>
            <button className='btn btn-warning' onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}

export default UseCustomHooks
