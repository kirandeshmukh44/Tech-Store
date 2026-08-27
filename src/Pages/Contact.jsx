import React, { useState } from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })


  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

  }


  const handleSubmit = (e) => {

    e.preventDefault()

    alert('Thank you! Your message has been submitted.')

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

  }


  return (
    <div className="min-h-screen bg-base-200">

      <Navbar />


      {/* Header */}
      <section className="bg-base-100 py-16">

        <div className="text-center px-6">

          <p className="text-primary font-semibold">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="text-base-content/60 mt-3">
            Have a question? We would love to hear from you.
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10">


          {/* Information */}
          <div>

            <p className="text-primary font-semibold">
              CONTACT INFORMATION
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Let's Talk
            </h2>

            <p className="text-base-content/60 mt-5 leading-relaxed">
              Whether you have a question about our products,
              your order or anything else, our team is ready to help.
            </p>


            <div className="space-y-4 mt-8">


              {/* Email */}
              <div className="card bg-base-100 shadow-sm">

                <div className="card-body flex-row items-center gap-4">

                  <div className="text-3xl">
                    📧
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Email
                    </h3>

                    <p className="text-sm text-base-content/60">
                      support@techstore.com
                    </p>

                  </div>

                </div>

              </div>


              {/* Phone */}
              <div className="card bg-base-100 shadow-sm">

                <div className="card-body flex-row items-center gap-4">

                  <div className="text-3xl">
                    📞
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Phone
                    </h3>

                    <p className="text-sm text-base-content/60">
                      +91 98765 43210
                    </p>

                  </div>

                </div>

              </div>


              {/* Location */}
              <div className="card bg-base-100 shadow-sm">

                <div className="card-body flex-row items-center gap-4">

                  <div className="text-3xl">
                    📍
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Location
                    </h3>

                    <p className="text-sm text-base-content/60">
                      Pune, Maharashtra, India
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">

            <form
              onSubmit={handleSubmit}
              className="card-body"
            >

              <h2 className="card-title text-2xl mb-4">
                Send us a Message
              </h2>


              {/* Name */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Your Name
                  </span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Email */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Email
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Subject */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Subject
                  </span>
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Message */}
              <div className="form-control">

                <label className="label">
                  <span className="label-text">
                    Message
                  </span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-32"
                  placeholder="Write your message..."
                  required
                />

              </div>


              <button
                type="submit"
                className="btn btn-primary mt-4"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  )
}

export default Contact