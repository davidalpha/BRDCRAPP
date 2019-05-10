import React from 'react';

function Liked(props) {
  console.log (props.liked);

function showLike()
{
  if (props.liked)
  { return '<3'}
}

  return (
    <div className="liked">
      {showLike()}
    </div>
  );
}

export default Liked;
