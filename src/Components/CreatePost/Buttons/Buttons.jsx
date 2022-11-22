import React, { useState, useEffect } from 'react';
import './Buttons.css'



const Buttons = (props) => {

    function handleLikeClick(){
        if (dislikeButtonActive === 'active'){
            setDislike(<img src={require('../../.././assets/dislike-button-inactive.png')} />)
            setDislikeButton('inactive')
        }
        if (likeButtonActive === 'inactive'){
            setLikeButton('active')
            setLike(<img src={require('../../.././assets/like-button-active.png')}/>)
        }
        else {
            setLikeButton('inactive')
            setLike(<img src={require('../../.././assets/like-button-inactive.png')}/>)
        }
    }

    function handleDislikeClick(){
        if (likeButtonActive === 'active'){
            setLike(<img src={require('../../.././assets/like-button-inactive.png')} />)
            setLikeButton('inactive')
        }
        if (dislikeButtonActive === 'inactive'){
            setDislikeButton('active')
            setDislike(<img src={require('../../.././assets/dislike-button-active.png')}/>)
        }
        else {
            setDislikeButton('inactive')
            setDislike(<img src={require('../../.././assets/dislike-button-inactive.png')}/>)
        }
    }
    const [likeButtonActive, setLikeButton] = useState ('inactive')
    const [dislikeButtonActive, setDislikeButton] = useState ('inactive')
    const [like, setLike] = useState(<img src={require('../../.././assets/like-button-inactive.png')}/>)
    const [dislike, setDislike] = useState(<img src={require('../../.././assets/dislike-button-inactive.png')} />)

    return ( 
        <div className='buttons'>
            <div onClick={handleLikeClick}>{like}</div>
            <div onClick={handleDislikeClick}>{dislike}</div>
        </div>
     );
}
 
export default Buttons;