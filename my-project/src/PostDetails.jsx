import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "./Contexts/PostsContext";

// PostDetails function displays one post based on the id in the URL.
export default function PostDetails() {
  // id variable stores the route parameter from the URL.
  const { id } = useParams(); // Get the post ID from the URL parameters that we defined in the route path in App.jsx
  // posts variable receives the posts array from context.
  const posts = useContext(PostsContext);
  // post variable stores the post that matches the URL id.
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    // div element displays a message when no post matches the URL id.
    return <div>Post not found</div>;
  }

  return (
    // div element wraps the selected post details.
    <div className="p-4">
      {/* h1 element displays the selected post title. */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {/* p element displays the selected post content. */}
      <p className="mb-2">{post.content}</p>
    </div>
  );
}
