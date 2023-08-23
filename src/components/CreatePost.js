import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Alert from './Alert';

export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isAlert, setIsAlert] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    const createPost = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        if(title === '' || content === '') {
            setIsAlert(true)
            setAlertType('danger');
            setAlertMessage('Please enter required fields.');
        } else {
            const headers = {
                'Content-Type': 'application/json',
            }
            axios.post(`posts`, {title, content}, {
                headers: headers
            })
            .then((response) => {
                console.log(response)
                if(response.request.status === 201) {
                    setTitle('');
                    setContent('');
                    setIsAlert(true)
                    setAlertType('success');
                    setAlertMessage('Post Created Successfully.');
                } else {
                    setIsAlert(true)
                    setAlertType('danger');
                    setAlertMessage('Something went wrong.');
                }
            })
            .catch((error) => {
                console.log(error)
                setIsAlert(true)
                setAlertType('danger');
                setAlertMessage(error);
            })
        }
        
    }

    return (
        <>
            <Link className='btn btn-sm btn-primary float-end' to='/posts'>Back</Link>
            <h3>Create Post</h3>
            <hr />
            <div className="row">
                { isAlert ? <Alert message={alertMessage} type={alertType} /> : '' }
                <div className="col-sm-6 my-2">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={createPost}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        aria-describedby="titleHelp"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder='Enter Post Title'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">
                                        Content
                                    </label>
                                    <input
                                        className="form-control"
                                        id="content"
                                        name="content"
                                        aria-describedby="contentHelp"
                                        value={content}
                                        onChange={e => setContent(e.target.value)}
                                        placeholder='Enter Post Content'
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Create Post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
