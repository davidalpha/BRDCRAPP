import React from 'react';
import Post from './post';

function Timeline(props) {

  return (
    <div className="timeline">
     timeline
     {props.posts.map(post => <Post post={post} />)}
    </div>
  );
}

export default Timeline;
