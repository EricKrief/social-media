import { useContext } from 'react';
import UserContext from '../../store/user-context';
import { IconCircle } from '../IconCircle/IconCircle';
import { UserCircle } from '../User/UserCircle/UserCircle';
import './Header.css';

export const Header = () => {

  const userContext = useContext(UserContext);

  return (
    <div className='header'>
      {
        userContext.loggedInUser &&
        <div className='icon-container'>
          <UserCircle pictureUrl={userContext.loggedInUser.pictureUrl} />
          <IconCircle name='bell'/>
          <IconCircle name='message'/>
          <IconCircle name='menu'/>
        </div>
      }
    </div>
  );
}