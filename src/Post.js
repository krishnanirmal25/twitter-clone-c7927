import React,{forwardRef} from 'react'
import './Post.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons';
const Post = forwardRef(({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
},ref) =>{
  return (
    <div className='post' ref={ref}>
      <div className='post__avatar'>
        <Avatar src={avatar}/>
        {/* <Avatar src='https://img.freepik.com/premium-vector/avatar-profile-colorful-illustration-2_549209-82.jpg'/> */}
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>{displayName}{""}
            <span className='post__headerSpecial'>
              {verified && <VerifiedUserIcon className='post__badge'/>}
              {/* @username */}
              {username}
            </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            {/* <p>This is Message</p> */}
            <p>{text}</p>
            
          </div>
        </div>
        <img 
          //src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnCNGPPzGxxQl5LYtT8r40egfoqaV5KBvSaBEe3bdUiguxu7bi"
          src={image}
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small'/>
          <FavoriteBorder fontSize='small'/>
          <Publish fontSize='small'/>
        </div>
      </div>
    </div>
  )
}
)


export default Post
