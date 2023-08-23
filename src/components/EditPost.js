import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function EditPost() {
    const {id} = useParams();
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(`posts/${id}`)
            .then((response) => {
                response.data = response.data.data
                setIsLoaded(true)
                setPost(response.data);
                console.log(response.data);
                setTitle(response.data.title)
                setContent(response.data.content)
            })
            .catch((error) => {
                setIsLoaded(true)
                setError(error)
            })
    }, [])

    const updatePost = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.title.content;
        axios.put(`posts/${id}`, {title, content})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

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
            <>
                <Link className='btn btn-sm btn-primary float-end' to='/posts'>Back</Link>
                <h3>Edit Post</h3>
                <hr/>
                <div className="row">
                                    
                    <div className="col-sm-6 my-2">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={updatePost}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name='title'
                                            aria-describedby="titleHelp"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label">
                                            Content
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="content"
                                            name='content'
                                            aria-describedby="contentHelp"
                                            rows={4}
                                            defaultValue={content}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Update Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                        
                        
                </div>
            </>
        )
    }
}
