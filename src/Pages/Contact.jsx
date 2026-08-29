import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Thank you! Your message has been submitted.')

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@techstore.com',
      description: 'Send us an email anytime',
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Mon - Sat, 9 AM - 6 PM',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Pune, Maharashtra',
      description: 'India',
    },
  ]

  return (
    <div className="min-h-screen bg-base-200">

      {/* Hero Section */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <p className="font-semibold tracking-widest text-primary">
            GET IN TOUCH
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-base-content/60">
            Have a question or need help? Our team is here to
            help you with anything you need.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="font-semibold tracking-widest text-primary">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Let's Talk
            </h2>

            <p className="mt-5 max-w-lg leading-relaxed text-base-content/60">
              Whether you have a question about our products,
              your order, delivery or anything else, our team is
              always ready to help.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">

              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl transition group-hover:scale-110">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-medium text-primary">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm text-base-content/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-base-300 bg-base-100 shadow-xl">

            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8"
            >

              <h2 className="text-2xl font-bold">
                Send us a Message
              </h2>

              <p className="mt-2 text-sm text-base-content/50">
                Fill out the form and we'll get back to you soon.
              </p>

              {/* Name */}
              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold">
                  Your Name
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
              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
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
              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="textarea textarea-bordered min-h-32 w-full"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary mt-6 w-full"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-primary-content">

        <div className="mx-auto max-w-4xl px-6 py-16 text-center">

          <div className="text-5xl">
            💬
          </div>

          <h2 className="mt-4 text-3xl font-bold">
            We're Here to Help
          </h2>

          <p className="mx-auto mt-3 max-w-xl opacity-80">
            Your questions and feedback matter to us.
            Don't hesitate to reach out.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact