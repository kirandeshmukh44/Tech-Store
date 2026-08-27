import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">

      {/* Main Footer */}
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto px-6 py-12">

        {/* Brand */}
        <aside>
          <h2 className="text-2xl font-bold">
            Tech <span className="text-primary">Store</span>
          </h2>

          <p className="text-gray-400 max-w-xs">
            Your one-stop destination for the latest technology products,
            gadgets, and accessories.
          </p>

          <p className="text-gray-500 mt-2">
            © 2026 Tech Store. All rights reserved.
          </p>
        </aside>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
        </nav>

        {/* Customer Service */}
        <nav>
          <h6 className="footer-title">Customer Service</h6>
          <a className="link link-hover">Shipping</a>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        {/* Contact */}
        <nav>
          <h6 className="footer-title">Contact Us</h6>

          <p className="text-gray-400">
            📧 support@techstore.com
          </p>

          <p className="text-gray-400">
            📞 +91 98765 43210
          </p>

          <p className="text-gray-400">
            📍 Maharashtra, India
          </p>
        </nav>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            Made with ❤️ for technology lovers
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">

            <button className="btn btn-circle btn-sm btn-ghost">
              f
            </button>

            <button className="btn btn-circle btn-sm btn-ghost">
              𝕏
            </button>

            <button className="btn btn-circle btn-sm btn-ghost">
              in
            </button>

            <button className="btn btn-circle btn-sm btn-ghost">
              ◎
            </button>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
