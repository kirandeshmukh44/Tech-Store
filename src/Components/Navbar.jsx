import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl shadow-md transition duration-300 group-hover:scale-105">
              ⚡
            </div>

            <div className="leading-none">
              <h1 className="text-xl font-black tracking-tight">
                Tech<span className="text-primary">Store</span>
              </h1>

              <p className="mt-1 text-[10px] font-medium tracking-widest text-base-content/50">
                SMART TECHNOLOGY
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-content shadow-sm'
                        : 'hover:bg-base-200 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex-none">
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Search */}
            {/* <button
              className="btn btn-ghost btn-circle hidden sm:flex"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button> */}

            {/* Cart */}
            <Link
              to="/cart"
              className="btn btn-ghost btn-circle"
              aria-label="Shopping cart"
            >
              <div className="indicator">
                <span className="indicator-item badge badge-primary badge-sm font-bold">
                  0
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-1 5h12m-9 0a1 1 0 1 0 2 0m6 0a1 1 0 0 0 2 0m6 0a1 1 0 1 0 2 0"
                  />
                </svg>
              </div>
            </Link>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Mobile Dropdown */}
              <ul
                tabIndex={0}
                className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
              >
                <li className="mb-2">
                  <div className="pointer-events-none flex items-center gap-3 border-b border-base-300 pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-lg">
                      ⚡
                    </div>

                    <div>
                      <p className="font-bold">
                        Tech<span className="text-primary">Store</span>
                      </p>

                      <p className="text-xs text-base-content/50">
                        Smart Technology
                      </p>
                    </div>
                  </div>
                </li>

                {/* Mobile Links */}
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-primary font-semibold text-primary-content'
                          : ''
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}

                {/* Mobile Cart */}
                <li className="mt-2 border-t border-base-300 pt-2">
                  <Link to="/cart">
                    🛒 Shopping Cart
                    <span className="badge badge-primary badge-sm">
                      0
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
