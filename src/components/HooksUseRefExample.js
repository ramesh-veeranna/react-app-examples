import React, { useState, useEffect, useRef } from 'react'

function HooksUseRefExample() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div className='mt-4'>
            <p>Hook Timer: {timer}</p>
            <button className='btn btn-dark' onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default HooksUseRefExample
