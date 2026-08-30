import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 6000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Customer Email Support',
      value: 'support@techstore.com',
      desc: 'Response guaranteed within 2-4 business hours',
    },
    {
      icon: <Phone className="h-6 w-6 text-cyan-500" />,
      title: 'Toll-Free Phone Helpline',
      value: '+91 98765 43210',
      desc: 'Monday to Saturday, 9:00 AM - 7:00 PM IST',
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-500" />,
      title: 'Headquarters & Logistics Hub',
      value: 'Pune Innovation Park',
      desc: 'Maharashtra 411001, India',
    },
  ]

  const faqs = [
    {
      q: 'How long does express shipping take?',
      a: 'All in-stock orders are processed within 24 hours and delivered in 2 to 3 business days nationwide.',
    },
    {
      q: 'Are all products covered by manufacturer warranty?',
      a: 'Yes, 100% of our products come with official brand warranty, original packaging, and verified tax invoice.',
    },
    {
      q: 'What is the return or replacement policy?',
      a: 'We offer a hassle-free 7-day replacement guarantee if your product arrives damaged or with any technical defect.',
    },
  ]

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-base-100 py-16 sm:py-20 border-b border-base-300">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>WE ARE HERE FOR YOU</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact <span className="text-gradient">TechStore</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-base-content/70">
            Have questions about product specifications, order status, or warranty? Our support engineering team is ready to help.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side: Contact Cards */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Direct Channels
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black">
                Get in Touch With Our Team
              </h2>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-base-200">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-base-content">
                      {info.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {info.value}
                    </p>
                    <p className="mt-0.5 text-xs text-base-content/50">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick FAQs */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="collapse collapse-arrow rounded-2xl bg-base-200/50 border border-base-300/60"
                  >
                    <input type="checkbox" />
                    <div className="collapse-title text-xs sm:text-sm font-bold">
                      {faq.q}
                    </div>
                    <div className="collapse-content text-xs text-base-content/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div>
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 sm:p-10 shadow-xl">
              <h3 className="text-2xl font-black">Send us a Message</h3>
              <p className="mt-1 text-xs text-base-content/60">
                Fill out the details below and we'll reply to your email promptly.
              </p>

              {submitted && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-500 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>
                    Thank you! Your message has been sent successfully. Our team will contact you shortly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="label text-xs font-bold">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="input input-bordered w-full rounded-2xl bg-base-100 text-sm focus:border-primary"
                  />
                </div>

                <div>
                  <label className="label text-xs font-bold">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="input input-bordered w-full rounded-2xl bg-base-100 text-sm focus:border-primary"
                  />
                </div>

                <div>
                  <label className="label text-xs font-bold">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Inquiry about Laptop Warranty"
                    required
                    className="input input-bordered w-full rounded-2xl bg-base-100 text-sm focus:border-primary"
                  />
                </div>

                <div>
                  <label className="label text-xs font-bold">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe how we can assist you..."
                    required
                    rows="4"
                    className="textarea textarea-bordered w-full rounded-2xl bg-base-100 text-sm focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-xl shadow-primary/25 hover:scale-[1.01] transition mt-6 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact