import { useContext, useState } from 'react';
import UserContext from '../../../store/user-context';
import { UserCircle } from '../../User/UserCircle/UserCircle';
import './CreatePost.css';

export const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const userContext = useContext(UserContext);

  function onTextChange(event: any) {
    setPostText(event.target.value);
  }

  return (
    <div className='create-post'>
      <div className='input-container' onChange={onTextChange}>
        <UserCircle pictureUrl={userContext.loggedInUser!.pictureUrl} />
        <input type='text' className='post-input' placeholder={`What's on your mind ${userContext.loggedInUser?.firstName}?`} />
      </div>
      <button className={`post-button ${postText ? '' : 'disabled'}`} disabled={!postText}>Share</button>
    </div>
  )
}