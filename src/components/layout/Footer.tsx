import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-red-600">Nike</h3>
          <p className="text-gray-400">
            Just Do It. Unleash your potential with the best in sports and
            lifestyle.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Support</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Newsletter</h4>
          <p className="text-gray-400">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Mero, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
