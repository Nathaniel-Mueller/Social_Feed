
const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.allPosts.map((post) => {
                        return (
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{post.name}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{post.post}</td>
                                        </tr>
                                        <tr>{post.buttons}</tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        )})}
        </div>
     );
}
 
export default DisplayPosts;