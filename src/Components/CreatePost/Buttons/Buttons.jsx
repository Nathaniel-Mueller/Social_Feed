import React, { useState, useEffect } from 'react';
import './Buttons.css'



const Buttons = (props) => {
    const [like, setLike] = useState(<img src={require('../../.././assets/like-button-inactive.png')}/>)
    const [dislike, setDislike] = useState(<img src={require('../../.././assets/dislike-button-inactive.png')} />)

    return ( 
        <div className='buttons'>
            <div onClick={(event) => setLike(<img src={require('../../.././assets/like-button-active.png')}/>)}>{like}</div>
            <div onClick={(event) => setDislike(<img src={require('../../.././assets/dislike-button-active.png')}/>)}>{dislike}</div>
        </div>
     );
}
 
export default Buttons;