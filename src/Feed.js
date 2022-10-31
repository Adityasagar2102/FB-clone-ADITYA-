import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
          profliePic='https://data.whicdn.com/images/182944028/original.jpg'
          message= "WOW this works!!"
          timestamp="this is time stamp"
          username="Aditya"
          image="https://media.gettyimages.com/photos/full-frame-shot-of-computer-language-picture-id1196680867?s=612x612"
        />
        <Post  
          profliePic='https://data.whicdn.com/images/182944028/original.jpg'
          message= "WOW this works!!"
          timestamp="this is time stamp"
          username="Aditya"
          // image="https://media.gettyimages.com/photos/full-frame-shot-of-computer-language-picture-id1196680867?s=612x612"
        />
        <Post />
    </div>
  )
}

export default Feed