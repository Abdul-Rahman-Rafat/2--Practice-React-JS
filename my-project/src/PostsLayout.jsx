import { Outlet } from "react-router-dom";
// PostsLayout function wraps the nested posts routes with shared layout content.
export default function PostsLayout() {
  return (
    <>
      {/* div element displays the top layout section before nested posts content. */}
      <div className="p-4">
        {/* h1 element displays the top layout heading. */}
        <h1 className="text-3xl font-bold mb-4 bg-amber-700">Posts Layout</h1>
      </div>

      {/* Outlet element renders the nested child route, like Posts or PostDetails. */}
      <Outlet />

      {/* div element displays the bottom layout section after nested posts content. */}
      <div className="p-4">
        {/* h1 element displays the bottom layout heading. */}
        <h1 className="text-3xl font-bold mb-4 bg-amber-700">Posts Layout</h1>
      </div>
    </>
  );
}
