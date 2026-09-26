
import { useState } from "react";
import { createContact } from "./contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("");
  setIsLoading(true);

  try {
    const data = await createContact(formData);

    console.log(data);

    setStatus("success");

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setStatus("");
    }, 5000);

  } catch (error) {
    console.error("Contact form error:", error);
    console.error("Error message:", error.message);
    console.error("Error response:", error.response);

    setStatus("error");

    // Hide error message after 5 seconds
    setTimeout(() => {
      setStatus("");
    }, 3000);

  } finally {
    setIsLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-white
        py-24
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project or an opportunity? Feel free to get in touch with me.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Information */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Let's Work Together
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              I'm interested in web development projects, collaboration
              opportunities and learning new technologies.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-blue-500 font-medium">
                  Email
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  asefakidanu21@example.com
                </p>
              </div>

              <div>
                <p className="text-blue-500 font-medium">
                  GitHub
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  github.com/Asefa-Kidanu21
                </p>
              </div>

              <div>
                <p className="text-blue-500 font-medium">
                  Location
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Ethiopia
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-gray-100 dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              rounded-xl
              p-6 md:p-8
            "
          >

            {/* Name */}
            <div className="mb-5">

              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-gray-800
                  text-gray-900 dark:text-white
                  placeholder-gray-400
                  border border-gray-300 dark:border-gray-700
                  rounded-lg
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />

            </div>

            {/* Email */}
            <div className="mb-5">

              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-gray-800
                  text-gray-900 dark:text-white
                  placeholder-gray-400
                  border border-gray-300 dark:border-gray-700
                  rounded-lg
                  outline-none
                  focus:border-blue-500
                  transition
                "
              />

            </div>

            {/* Message */}
            <div className="mb-6">

              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-gray-800
                  text-gray-900 dark:text-white
                  placeholder-gray-400
                  border border-gray-300 dark:border-gray-700
                  rounded-lg
                  outline-none
                  focus:border-blue-500
                  transition
                  resize-none
                "
              ></textarea>

            </div>

            {/* Success Message */}
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 mb-5">
                Message sent successfully! Thank you for contacting me.
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 mb-5">
                Failed to send your message. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                w-full py-3
                bg-blue-600
                hover:bg-blue-700
                disabled:bg-blue-400
                disabled:cursor-not-allowed
                rounded-lg
                font-medium
                text-white
                transition
              "
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
