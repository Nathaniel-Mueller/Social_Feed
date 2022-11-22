import './DisplayPosts.css'


const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.allPosts.map((post) => {
                        return (
                            <div className='bottom-line pad'>
                                <table className='flex-container'>
                                    <thead>
                                        <tr>
                                            <th className='change-name-size'>{post.name}</th>
                                        </tr>
                                    </thead>
                                    <tbody className='offset-post-content'>
                                        <tr>
                                            <td className='max-post-width'>{post.post}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='buttons-margin'>{post.buttons}</div>
                            </div>
                        )})}
        </div>
     );
}
 
export default DisplayPosts;