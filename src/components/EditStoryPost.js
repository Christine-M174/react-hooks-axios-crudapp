import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'; // Note(9) :: // lets the user navigate to another page by clicking or tapping on it. 
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditStoryPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:8080/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("title", result.data.title);
            setValue("author", result.data.author);
            setValue("body", result.data.body);
        })
    }, [id]);

    const onSubmit = data => {
        axios.put(`http://localhost:8080/posts/${id}`, data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">New Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" name="title" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.title && 'this title Not valid '}</small>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" className="form-control" name="author" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.author && 'Author not valid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Conteúdo</label>
                            <textarea name="body" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                            <small className="form-text text-danger">{errors.body && 'Conteúdo not valid'}</small>
                        </div>
                        
                        <Link to="/" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancel
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Save <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditStoryPost;