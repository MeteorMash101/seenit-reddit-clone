import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainFeed from './components/Pages/MainFeed.js';
import PostView from './components/Pages/PostView.js';
import CreatePost from './components/Pages/CreatePost.js';
import { useNavigate } from "react-router-dom";
import SubFeed from './components/Pages/SubFeed.js';
import UserProfile from './components/Pages/UserProfile';

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();

  const addPostHandler = (eTitle, eText) => { // 'e' = 'entered'
    setPostsList((prevPostsList) => { // we can access prev. state this way.
      // we don't simply just use 'push' b/c it can lead to race-conditions (read more on S.O.)
      return [
        ...prevPostsList,
        { type: "POST", title: eTitle, text: eText, id: Math.random().toString() }
      ]
    })
    navigate("/", { replace: true }); // redirect to home page
  }

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
  console.log("updated", postsList);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainFeed posts={postsList}/>} exact/>
        <Route path="/post" element={<PostView/>}/>
        <Route path="/new" element={<CreatePost submissionHandlers={submissionHandlers}/>}/>
        <Route path="/subreddit" element={<SubFeed posts={postsList}/>}/>
        <Route path="/user" element={<UserProfile posts={postsList}/>}/>
      </Routes>
    </div>
  );
}

export default App;