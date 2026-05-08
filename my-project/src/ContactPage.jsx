// ContactPage function displays the contact information page.
export default function ContactPage() {
  return (
    // div element wraps all contact page content.
    <div className="p-4">
      {/* h1 element displays the contact page title. */}
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {/* p element displays a short contact message. */}
      <p className="mb-2">
        Feel free to reach out to us with any questions or inquiries.
      </p>
      {/* ul element contains the contact methods list. */}
      <ul className="list-disc pl-5">
        {/* li element contains the email contact method. */}
        <li>
          Email:
          {/* a element opens the user's email app to send a message. */}
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
