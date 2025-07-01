import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
const [posts,setPosts]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState(null)

useEffect(()=>{
    const fetchPosts= async()=>{
        try{
            const response = await fetch("https://dummyjson.com/posts")
            if(!response.ok){
                throw new Error("Failed to fetch posts")
            }
            const data= await response.json()
            setPosts(data.posts)
        }
         catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
     fetchPosts();
},[])
if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

    return(
        <>
       
     <div>
      <h1>Latest Blog Posts</h1>
      <div style={{display:"grid"}}>
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.body.substring(0, 100)}...</p>
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
       </div>
         </>
    )
}
export default Home;