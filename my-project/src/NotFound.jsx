import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-2">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
