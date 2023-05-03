import React, { useState } from 'react'
import {Avatar, Button} from '@material-ui/core'
import './TweetBox.css'
import db from './firebase'
function TweetBox() {

  const [tweetMessage,setTweetMessage] = useState('');
  const [tweetImage,setTweetImage] = useState('');

  const sendTweet = e =>{
    e.preventDefault();
    db.collection('posts').add({
      displayName:"krishna Nirmal",
      username:"krishna.developer",
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:"https://i.pravatar.cc/300"

    })
    setTweetImage("")
    setTweetMessage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
        <Avatar src='https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg'/>
        <input 
          onChange={(e) =>setTweetMessage(e.target.value)}
          value={tweetMessage} 
          type='text' 
          placeholder="What`s Happening" />
        </div>

        <input
            value={tweetImage}
            onChange={e =>setTweetImage(e.target.value)}
            className='tweetBox__imageInput'
            placeholder='optional:Enter image URL'
            type='text'
        />
        <Button onClick ={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
