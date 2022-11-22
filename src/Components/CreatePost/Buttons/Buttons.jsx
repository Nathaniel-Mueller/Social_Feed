import React, { useState } from 'react';
import './Buttons.css'



const Buttons = (props) => {

    function handleLikeClick(){
        if (dislikeButtonActive === 'active'){
            setDislike(<img src={require('../../.././assets/dislike-button-inactive.png')} alt = ''/>)
            setDislikeButton('inactive')
        }
        if (likeButtonActive === 'inactive'){
            setLikeButton('active')
            setLike(<img src={require('../../.././assets/like-button-active.png')} alt = ''/>)
        }
        else {
            setLikeButton('inactive')
            setLike(<img src={require('../../.././assets/like-button-inactive.png')} alt = ''/>)
        }
    }

    function handleDislikeClick(){
        if (likeButtonActive === 'active'){
            setLike(<img src={require('../../.././assets/like-button-inactive.png')} alt = ''/>)
            setLikeButton('inactive')
        }
        if (dislikeButtonActive === 'inactive'){
            setDislikeButton('active')
            setDislike(<img src={require('../../.././assets/dislike-button-active.png')} alt = ''/>)
        }
        else {
            setDislikeButton('inactive')
            setDislike(<img src={require('../../.././assets/dislike-button-inactive.png')} alt = ''/>)
        }
    }
    const [likeButtonActive, setLikeButton] = useState ('inactive')
    const [dislikeButtonActive, setDislikeButton] = useState ('inactive')
    const [like, setLike] = useState(<img src={require('../../.././assets/like-button-inactive.png')} alt = ''/>)
    const [dislike, setDislike] = useState(<img src={require('../../.././assets/dislike-button-inactive.png')} alt = ''/>)

    return ( 
        <div className='buttons'>
            <div onClick={handleLikeClick}>{like}</div>
            <div onClick={handleDislikeClick}>{dislike}</div>
        </div>
     );
}
 
export default Buttons;