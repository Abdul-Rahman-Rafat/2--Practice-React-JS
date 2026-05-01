import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { PostsContext } from "./Contexts/PostsContext";

import ContactPage from "./ContactPage";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import PostsLayout from "./PostsLayout";

let postsData = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

function App() {
  return (
    <PostsContext.Provider value={postsData}>
      <>
        <nav>
          <ul className="flex gap-4 p-4 bg-gray-200">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" className="text-blue-500 hover:underline">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <h1>Hello, React!</h1>
        <h2
          className="text-2xl
       bg-blue-500
        text-white
         p-4
         hover:scale-90
          transition-transform duration-300
         "
        >
          Hello, Tailwind!
        </h2>
        <div
          className="mx-auto mt-2.5
          p-4
       w-1/2  h-50
        bg-red-500 rounded-xl
          text-white
           flex flex-col items-center justify-center 
            hover:drop-shadow-lg hover:bg-amber-700
             transition-all duration-300
             border-2 border-black
             
             "
        >
          <hr />
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/posts" element={<PostsLayout />}>
              <Route index element={<Posts />} />
              <Route path=":id" element={<PostDetails />} />
            </Route>

            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </PostsContext.Provider>
  );
}

export default App;
