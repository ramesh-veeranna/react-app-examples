import React, { useState } from 'react'

function HooksArrayExample() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            _id: items.length,
            value: Math.floor(Math.random() * 100000) + 1
        }])
    }

    return (
        <div className='mt-4'>
            <h4>Add Random Item to Array List</h4>
            <hr />
            <button className='btn btn-primary btn-sm' onClick={addItem}>Add Random Item</button>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.value}</li>
                ))}
            </ul>

            Array Format:
            <div className='' style={{maxHeight: '200px', overflowY: 'scroll', marginTop: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '4px'}}>
                <code>
                    <pre>
                        {JSON.stringify(items, undefined, 4)}
                    </pre>
                </code>
            </div>
        </div>
    )
}

export default HooksArrayExample
