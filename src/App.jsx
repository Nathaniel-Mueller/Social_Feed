import { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'


function App() {

  const [posts, setPosts] = useState([{}])

  function addNewPost (post){
    let tempPosts = [...posts, post]
    setPosts(tempPosts)
  }

  return (
    <div>
        <NavBar />
      <div className="container-wrapper">
        <div className="border-box create-post-wrap">
          <CreatePost addNewPost={addNewPost}/>  
        </div>
        <div className="border-box post-wrap">
          <DisplayPosts allPosts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
 