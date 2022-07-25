import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeleteStoryPost = (props) => {
    const { id } = useParams();  // Note(6) :: // we want to access the parameters of the current route in this case useParams hook comes into action. The react-router-dom package has useParams hooks that let you access the parameters of the current route.
    const [post, setPost] = useState();  // Note(7) :: // this component is a function component that is a stateless component so ,The React useState() Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application

    // Note(8) :: // the best part of React Hooks , fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. By default, it runs both after the first render and after every update.
    useEffect(() => {                     
        axios.get(`http://localhost:8080/posts/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);

    const handleRemovePost = () => {
        axios.delete(`http://localhost:8080/posts/${id}`).then(result => {
            props.history.push("/");
        })
    }

    return (
        <div>
            <h2>Do you want to delete the story post <strong>{post?.title}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancel
                </Link>
                <button onClick={handleRemovePost} className="btn btn-danger">
                    Delete <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default DeleteStoryPost;