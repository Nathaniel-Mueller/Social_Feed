import React, { useState } from 'react';
import Buttons from './Buttons/Buttons';
import './CreatePost.css'


const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit (event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            buttons: <Buttons/>
        } 
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='create-post-container'>
                <div className='create-row'>
                    <label>Name</label>
                    <input className='name-input' type = 'text' value = {name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='create-row'>
                    <label className='post-margin'>Post</label>
                    <input className='post-input' type = 'text' value = {post} onChange={(event) => setPost(event.target.value)}/>
                </div>
                <div>
                    <button className='button-margin' type='submit'>Create</button>
                </div>
            </div>
        </form>
    )
}
 
export default CreatePost;