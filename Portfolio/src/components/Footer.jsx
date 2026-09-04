

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white"
          >
            Asefa<span className="text-blue-500">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Asefa Kidanu. All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="text-sm hover:text-blue-500 transition"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;