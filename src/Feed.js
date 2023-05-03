import React,{useState,useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post.js'
import db from './firebase'
import FlipMove from 'react-flip-move';
function Feed() {

  const [posts,setPosts]= useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc => doc.data()))      
    ))
    console.log("posts------>",posts);
  },[]);

  return (
    <div className='feed'>
      {/* {Home} */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      {/* {TweetBox} */}
      <TweetBox/>
      {/* {post} */}

      {/* --------start here----- */}
    <FlipMove>

      {posts.map(post =>
        <Post
        key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image ={post.image}
        />
      )}
      </FlipMove>
      {/* <Post/>
      <Post/>
      <Post/> */}
    </div>
  )
}

export default Feed
