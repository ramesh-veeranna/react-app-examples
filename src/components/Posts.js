import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import loadingImg from './../loader.gif'

export default function Posts() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('posts')
            .then((response) => {
                setIsLoaded(true);
                setPosts(response.data);
                // console.log(response.data);                
            })
            .catch((error) => {
                setIsLoaded(true)
                setError(error)
            })
    }, [])

    const deletePost = (id) => {
        console.log(`Delete ${id}`);
    }

    if (error) {
        return (
            <div className='alert alert-danger'>
                {error}
            </div>
        )
    } else if (!isLoaded) {
        return (
            <>
                <div className='alert alert-primary'>
                    Loading...
                </div>
                <img src={loadingImg} />
            </>
        )
    } else {
        return (
            <>
                <Link to={`/posts/create`} className='btn btn-sm btn-primary float-end'>Create New Post</Link>
                <h3>List Of Posts</h3>
                <hr/>
                <div className="row">
                    {posts && posts.map((item) => {
                        return (
                            
                            <div className="col-sm-4 my-2" key={item.id}>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.content}</p>

                                <button onClick={deletePost(item.id)} className="btn btn-sm btn-danger float-end px-3">
                                    Delete
                                </button>
                                <Link to={`/posts/${item.id}/edit`} className="btn btn-sm btn-primary float-end px-3 mx-2">
                                    Edit
                                </Link>
                            </div>
                            </div>
                        </div>
                        
                        )
                    })}
                </div>
            </>
        )
    }
}
