import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Post from './components/Post';

function App() {
  // Timer state
  const [timer, setTimer] = useState(0);
  
  // Post form states
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  // Posts list state
  const [posts, setPosts] = useState([]);

  // Timer effect - increments every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Add new post handler
  const addPost = useCallback((e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    
    const newPost = {
      id: Date.now(),
      title,
      body
    };
    
    setPosts(prevPosts => [...prevPosts, newPost]);
    setTitle('');
    setBody('');
  }, [title, body]);

  // Memoize the posts list to prevent unnecessary re-renders
  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <div className="app">
      <h1>Optimized Blog App (Timer: {timer}s)</h1>
      
      <form onSubmit={addPost} className="post-form">
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        
        <div>
          <label>Body:</label>
          <textarea 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
          />
        </div>
        
        <button type="submit">Add Post</button>
      </form>

      <div className="posts-container">
        <h2>Posts ({memoizedPosts.length})</h2>
        {memoizedPosts.map(post => (
          <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;