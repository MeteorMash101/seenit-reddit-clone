import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainFeed from './components/Pages/MainFeed.js';
import PostView from './components/Pages/PostView.js';
import CreatePost from './components/Pages/CreatePost.js';
import { useNavigate } from "react-router-dom";
import SubFeed from './components/Pages/SubFeed.js';
import UserProfile from './components/Pages/UserProfile';
import axios from 'axios';

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();
  // Only the "first" time this App is loaded, do we pull everything from DB.
  // From then on, ReactJS maintains separate state that is "in-sync" with the DB.
  useEffect(() => {
    const fetchPosts = async () => {
      const postsFromServer = await axios.get("http://localhost:4000/posts")
      console.log("[DEBUG]: posts received from db:", postsFromServer.data)
      setPostsList(postsFromServer.data)
    }
    fetchPosts()
  }, []) // this DB retreival should only execute the first time this App is loaded.
  // (might be able to use reducer for this?)
  const addPostHandler = async (eTitle, eText, author_id, author_username) => { // 'e' = 'entered'
    const newPost = {
      type: "TEXT",
      title: eTitle,
      textContent: eText, 
      author_id: author_id,
      author_username: author_username
    }
    const postAddedToDB = await axios.post("http://localhost:4000/posts/new", newPost)
    console.log("[DEBUG]: POST ADDED: ", postAddedToDB.data)
    setPostsList((prevPostsList) => { // we can access prev. state this way.
      // we don't simply just use 'push' b/c it can lead to race-conditions (read more on S.O.)
      return [
        ...prevPostsList,
        { ...postAddedToDB.data, id: postAddedToDB.data.post_id } // 'id' here is just for the react frontend
      ]
    })
    navigate("/", { replace: true }); // redirect to home page
  }
  const removePostHandler = async (post_id) => {
    await axios.post(`http://localhost:4000/posts/delete/${post_id}`)
    console.log("[DEBUG]: POST REMOVED")
    setPostsList((prevPostsList) => {
      return prevPostsList.filter(post => post.post_id !== post_id)
    })
    navigate("/", { replace: true }); // redirect to home page
  }
  // EDIT: [WIP]
  const addIAHandler = (eTitle, uMedia) => { // 'uMedia' = 'uploadedMedia'
    setPostsList((prevPostsList) => {
      return [
        ...prevPostsList,
        { type: "IA", title: eTitle, media: uMedia, id: Math.random().toString() }
      ]
    })
    navigate("/", { replace: true }); // redirect to home page
  }
  // Wrapper object to pass down to children for actions.
  const submissionHandlers = {
    onAddPost: addPostHandler,
    onAddIA: addIAHandler
  }
  console.log("[DEBUG]: current posts lists:", postsList);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainFeed postsList={postsList} onRemovePost={removePostHandler}/>} exact/>
        <Route path="/post/:post_id" element={<PostView onRemovePost={removePostHandler}/>}/>
        {/* may add /subreddit/ name here in this header */}
        <Route path="/new" element={<CreatePost submissionHandlers={submissionHandlers}/>}/>
        <Route path="/user" element={<UserProfile postsList={postsList}/>}/>
        {/* Manually created subreddits: */}
        <Route path="/r/funny" element={<SubFeed name={"Funny"} postsList={postsList}/>}/>
        <Route path="/r/memes" element={<SubFeed name={"Memes"} postsList={postsList}/>}/>
        <Route path="/r/cute" element={<SubFeed name={"Cute"} postsList={postsList}/>}/>
      </Routes>
    </div>
  );
}

export default App;