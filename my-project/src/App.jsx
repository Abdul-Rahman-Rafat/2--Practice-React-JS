import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { PostsContext } from "./Contexts/PostsContext";

import ContactPage from "./ContactPage";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import PostsLayout from "./PostsLayout";
import TailwindReadyComponents from "./TailwindReadyComponents";

// postsData variable stores the sample posts that will be shared through context.
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

// App function is the main component that controls the routes and shared posts data.
function App() {
  return (
    // PostsContext.Provider element makes postsData available to child components.
    <PostsContext.Provider value={postsData}>
      <>
        {/* nav element contains the main page navigation links. */}
        <nav>
          {/* ul element groups the navigation items in one list. */}
          <ul className="flex gap-4 p-4 bg-gray-200">
            {/* li element contains the Home navigation link. */}
            <li>
              {/* Link element navigates to the home route without reloading the page. */}
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            {/* li element contains the Posts navigation link. */}
            <li>
              {/* Link element navigates to the posts route without reloading the page. */}
              <Link to="/posts" className="text-blue-500 hover:underline">
                Posts
              </Link>
            </li>
            {/* li element contains the Ready page navigation link. */}
            <li>
              {/* Link element navigates to the ready components route. */}
              <Link to="/ready" className="text-blue-500 hover:underline">
                Ready
              </Link>
            </li>
          </ul>
        </nav>

        {/* h1 element displays the main React heading. */}
        <h1>Hello, React!</h1>
        {/* h2 element displays a styled Tailwind heading. */}
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
        {/* div element wraps the route output inside a styled container. */}
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
          {/* hr element adds a horizontal divider before the routed pages. */}
          <hr />
          {/* Routes element chooses which page component appears based on the URL. */}
          <Routes>
            {/* Route element renders the home heading at the root path. */}
            <Route path="/" element={<h1>Home Page</h1>} />
            {/* Route element groups the posts routes inside PostsLayout. */}
            <Route path="/posts" element={<PostsLayout />}>
              {/* Route element renders the posts list when the URL is exactly /posts. */}
              <Route index element={<Posts />} />
              {/* Route element renders one post details page based on the URL id. */}
              <Route path=":id" element={<PostDetails />} />
            </Route>

            {/* Route element renders the Tailwind ready-made component page. */}
            <Route path="/ready" element={<TailwindReadyComponents />} />
            {/* Route element catches every unknown URL and shows the not found page. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* hr element adds a horizontal divider after the routed pages. */}
        <hr />
        {/* <TailwindReadyComponents /> */}
      </>
    </PostsContext.Provider>
  );
}

export default App;
