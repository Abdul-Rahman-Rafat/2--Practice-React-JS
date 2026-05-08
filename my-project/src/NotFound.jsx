import { Link } from "react-router-dom";
// NotFound function displays a fallback page for unknown routes.
export default function NotFound() {
  return (
    // div element wraps the not found page content.
    <div className="p-4">
      {/* h1 element displays the 404 title. */}
      <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
      {/* p element explains that the requested page does not exist. */}
      <p className="mb-2">The page you are looking for does not exist.</p>
      {/* Link element navigates the user back to the home page. */}
      <Link to="/" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
