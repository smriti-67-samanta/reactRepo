import React, { memo } from 'react';

const Post = memo(({ id, title, body }) => {
  console.log(`Rendering Post ${id}`); 
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{body}</p>
      <small>Post ID: {id}</small>
    </div>
  );
});

export default Post;