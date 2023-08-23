import React, { useState, useEffect} from 'react'

export default function HooksObjectExample() {

    const [name, setName] = useState({firstName: '', middleName: '', lastName: ''})   

    useEffect(() => {
        document.title = `${name.firstName}` 
        console.log(`Triggered: whenever this function calls`)
    }, [name.firstName]) 
    // conditionally execute this function, only when it change the value of name.firstName

    return (
        <div>
            <h4>Hooks Object Samples</h4>
            <hr />
            <p>
                First Name: <strong> {name.firstName} </strong> <br/> 
                Middle Name: <strong> {name.middleName} </strong> <br /> 
                Last Name: <strong> {name.lastName} </strong>
            </p>
            <div className='row mb-4'>
                <div className='col-4'>
                    <input 
                        className='form-control' 
                        name='firstName' 
                        id='firstName' 
                        value={name.firstName} 
                        onChange={e => setName({...name, firstName: e.target.value})} 
                        placeholder='Enter First Name'
                        />
                </div>
                <div className='col-4'>
                    <input 
                        className='form-control' 
                        name='middleName' 
                        id='middleName' 
                        value={name.middleName} 
                        onChange={e => setName({...name, middleName: e.target.value})} 
                        placeholder='Enter Middle Name'
                        />
                </div>
                <div className='col-4'>
                    <input 
                        className='form-control' 
                        name='lastName' 
                        id='lastName' 
                        value={name.lastName} 
                        onChange={e => setName({...name, lastName: e.target.value})} 
                        placeholder='Enter Last Name'
                        />
                </div>       
            </div>
            
            JSON Format:
            <code>
                <pre>
                    {JSON.stringify(name)}
                </pre>
            </code>
        </div>
    )
}
