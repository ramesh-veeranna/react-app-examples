import React from 'react'
import useInput from '../hooks/useInput'

function UseCustomHooksForFormInputs() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        console.log(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div className='mt-4'>
            <form onSubmit={submitHandler}>
                <div className='my-2'>
                    <label>First Name:</label>
                    <input type='text' className='form-control' {...bindFirstName} placeholder='First Name' />
                </div>
                <div className='my-2'>
                    <label>Last Name:</label>
                    <input type='text' className='form-control' {...bindLastName} placeholder='Last Name' />
                </div>
                <button className='btn btn-primary px-4 mt-3'>Submit</button>
            </form>

        </div>
    )
}

export default UseCustomHooksForFormInputs
