import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Email:', email)
    console.log('Password:', password)

    alert('Login submitted!')
  }

  return (
    <div className="min-h-screen bg-base-200">

      <Navbar />

      {/* Login Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Welcome <span className="text-primary">Back!</span>
            </h1>

            <p className="text-base-content/60 mt-2">
              Login to your TechStore account
            </p>

          </div>


          {/* Card */}
          <div className="card bg-base-100 shadow-xl">

            <form
              onSubmit={handleSubmit}
              className="card-body"
            >

              <h2 className="card-title text-2xl mb-4">
                Login
              </h2>


              {/* Email */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>


              {/* Password */}
              <div className="form-control">

                <label className="label">

                  <span className="label-text">
                    Password
                  </span>

                  <a className="label-text-alt link link-primary">
                    Forgot password?
                  </a>

                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>


              {/* Remember Me */}
              <div className="form-control mt-2">

                <label className="label cursor-pointer justify-start gap-3">

                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />

                  <span className="label-text">
                    Remember me
                  </span>

                </label>

              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-full mt-4"
              >
                Login
              </button>


              {/* Register */}
              <div className="divider">
                OR
              </div>

              <p className="text-center text-sm">

                Don't have an account?

                <span className="text-primary font-semibold ml-1 cursor-pointer">
                  Register
                </span>

              </p>

            </form>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  )
}

export default Login