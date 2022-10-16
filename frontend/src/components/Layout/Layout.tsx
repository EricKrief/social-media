import './Layout.css';
import { PostsContainer } from "../Posts/PostsContainer/PostsContainer";
import { FriendsList } from '../FriendsList/FriendsList';
import { ActionsSidebar } from '../ActionsSidebar/ActionsSidebar';

export const Layout = () => {
  return (
    <div className="layout">
      <FriendsList />
      <PostsContainer />
      <ActionsSidebar />
    </div>
  )
}