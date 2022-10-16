import "./PostsContainer.css";
import { Post } from "../Post/Post";
import { CreatePost } from "../CreatePost/CreatePost";

export const PostsContainer = () => {
  return (
    <div className="posts-container">
      <CreatePost name="Eric" />
      <Post />
    </div>
  );
}