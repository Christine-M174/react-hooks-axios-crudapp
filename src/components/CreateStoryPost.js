import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
//import httpRequest from "../baseURL";

// Note(2)::  Hooks don't work inside classes — they let you use React without classes.
//Note (3):: There is no render method used in functional components,accepts props as an argument and returns a React element(JSX)
const CreateStoryPost = (props) => {
    const { register, handleSubmit, errors } = useForm();  // Note(4) :: the react-hook-form functions and the futures https://react-hook-form.com/v6/api#handleSubmit
    const onSubmit = data => {
        axios.post('http://localhost:8080/posts', data).then(result => {
            props.history.push("/"); //Note(5) :: this works when the component is being rendered by React Router, bypassing the component as a Component prop to a Route.
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">New Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control" name="title" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.title && ' invalid title'}</small>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" className="form-control" name="author" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.author && 'invalid auther '}</small>
                        </div>
                        <div className="form-group">
                            <label>Story Body</label>
                            <textarea name="body" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                            <small className="form-text text-danger">{errors.body && 'invalid body'}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateStoryPost;