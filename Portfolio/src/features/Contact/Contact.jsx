

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project or an opportunity? Feel free to get in touch
            with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Let's Work Together
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              I'm interested in web development projects, collaboration
              opportunities and learning new technologies.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-blue-500 font-medium">
                  Email
                </p>

                <p className="text-gray-300 mt-1">
                  asefakidanu21@example.com
                </p>
              </div>

              <div>
                <p className="text-blue-500 font-medium">
                  GitHub
                </p>

                <p className="text-gray-300 mt-1">
                  github.com/Asefa-Kidanu21
                </p>
              </div>

              <div>
                <p className="text-blue-500 font-medium">
                  Location
                </p>

                <p className="text-gray-300 mt-1">
                  Ethiopia
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">

            <div className="mb-5">
              <label className="block text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;