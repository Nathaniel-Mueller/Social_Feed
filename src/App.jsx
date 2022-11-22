import { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'


function App() {

  const [posts, setPosts] = useState([{}])

  function addNewPost (post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }

  return (
    <div>
      <NavBar />
      <CreatePost addNewPost={addNewPost}/>    
      <DisplayPosts allPosts={posts}/>
    </div>
  );
}

export default App;
 