import { Outlet } from "react-router-dom";
export default function PostsLayout() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 bg-amber-700">Posts Layout</h1>
      </div>

      <Outlet />

      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 bg-amber-700">Posts Layout</h1>
      </div>
    </>
  );
}
