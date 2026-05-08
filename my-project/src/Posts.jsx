import { PostsContext } from "./Contexts/PostsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Posts function displays all posts from PostsContext.
export default function Posts() {
  // posts variable receives the posts array from the context provider.
  const posts = useContext(PostsContext);

  return (
    // div element wraps the posts page content.
    <div className="p-4">
      {/* h1 element displays the posts page title. */}
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {/* p element displays a short description before the list. */}
      <p className="mb-2">Here are some of our latest posts:</p>
      {/* ul element contains all post links. */}
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            {/* Link element opens the selected post details route. */}
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
