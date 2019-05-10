import React, { useState } from 'react';
import Liked from './liked.js';

function Post(props) {

  const [liked, setLiked] = useState(false);

  function Like()
  {
    setLiked(liked => !liked);
  };


  return (
    <div className="post">
     <span>
     Name: {props.post.username}
     <p>
     {props.post.content}
     </p>
     <Liked liked={liked}/>
    <button onClick={() => Like()}>Like!</button>
     </span>
    </div>
  );
}

export default Post;
