import React, { useEffect, useRef } from 'react'

function HooksRefExample() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <h4>Input Ref Example</h4>
            <input ref={inputRef} type='text' className='form-control' placeholder='Enter Values' />
        </div>
    )
}

export default HooksRefExample
