import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-md px-6 lg:px-12 sticky top-0 z-50">

      {/* Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold cursor-pointer">
          Tech <span className="text-primary">Store</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li>
            <a className="hover:text-primary">Home</a>
          </li>

          <li>
            <a className="hover:text-primary">Products</a>
          </li>

          <li>
            <a className="hover:text-primary">About</a>
          </li>

          <li>
            <a className="hover:text-primary">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex-none ml-4 flex items-center gap-3">

    

        {/* Cart */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <span className="indicator-item badge badge-primary badge-sm">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-1 5h12m-9 0a1 1 0 1 0 2 0m6 0a1 1 0 1 0 2 0"
              />
            </svg>
          </div>
        </button>

        {/* Login */}
        <button className="btn btn-primary hidden sm:flex">
          Login
        </button>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
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

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-48 p-2 shadow-lg"
          >
            <li><a>Home</a></li>
            <li><a>Products</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
