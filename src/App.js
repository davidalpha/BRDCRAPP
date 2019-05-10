import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

import Header from './header';
import Timeline from './timeline';
import Compose from './compose';

function App() {

const initialPosts =[

];

const [posts, setPosts] = useState(initialPosts);

function addPost(name, content)
{
  const newPost = {username: name, content: content}
  setPosts([newPost, ...posts])
};

  return (
    <div className="App">
      <Header />
      <Compose addPost={addPost}/>
      <Timeline posts={posts}/>
      <button onClick={() => addPost('Mario','Its-a-me')}>Add Post</button>
    </div>
  );
}

export default App;
