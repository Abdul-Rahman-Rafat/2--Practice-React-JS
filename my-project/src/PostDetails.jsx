import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "./Contexts/PostsContext";

export default function PostDetails() {
  const { id } = useParams(); // Get the post ID from the URL parameters that we defined in the route path in App.jsx
  const posts = useContext(PostsContext);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-2">{post.content}</p>
    </div>
  );
}
