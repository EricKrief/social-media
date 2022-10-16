import { useState } from 'react';
import { UserCircle } from '../../UserCircle/UserCircle';
import './CreatePost.css';

interface CreatePostProps {
  name: string;
}

export const CreatePost = ({ name }: CreatePostProps) => {
  const [postText, setPostText] = useState("");

  function onTextChange(event: any) {
    setPostText(event.target.value);
  }

  return (
    <div className='create-post'>
      <div className='input-container' onChange={onTextChange}>
        <UserCircle />
        <input type='text' className='post-input' placeholder={`What's on your mind ${name}?`} />
      </div>
      <button className={`post-button ${postText ? '' : 'disabled'}`} disabled={!postText}>Share</button>
    </div>
  )
}