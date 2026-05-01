import { PostsContext } from "./Contexts/PostsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const posts = useContext(PostsContext);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <p className="mb-2">Here are some of our latest posts:</p>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
