import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Users() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('users')
            .then((response) => {
                setIsLoaded(true)
                setUsers(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                setIsLoaded(true)
                setError(error)
            })
    }, [])

    if (error) {
        return (
            <div className='alert alert-danger'>
                {error}
            </div>
        )
    } else if (!isLoaded) {
        return (
            <div className='alert alert-primary'>
                Loading...
            </div>
        )
    } else {
        return (
            <div className="row">
                {users && users.map((item) => {
                    return (
                        
                        <div className="col-sm-4 my-2" key={item.id}>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                Email: {item.email} <br />
                              With supporting text below as a natural lead-in to additional content.
                            </p>
                            <Link to="/users" className="btn btn-sm btn-primary float-end">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                    )
                })}
            </div>
        )
    }
}
