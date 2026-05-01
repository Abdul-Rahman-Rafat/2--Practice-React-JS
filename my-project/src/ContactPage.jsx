export default function ContactPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        Feel free to reach out to us with any questions or inquiries.
      </p>
      <ul className="list-disc pl-5">
        <li>
          Email:
          <a
            href="mailto:info@company.com"
            className="text-blue-500 hover:underline"
          >
            info@company.com
          </a>
        </li>
      </ul>
    </div>
  );
}
