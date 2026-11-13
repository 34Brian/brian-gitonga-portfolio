import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import "./contact.css";

const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hi Brian,

My name is ${form.name}.
Email: ${form.email}
Service: ${form.service}
Budget: ${form.budget || "Not specified"}

Project details:
${form.message}

Looking forward to hearing from you.`
    );

    window.location.href =
      `mailto:briangitonga3@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      {/* CONTACT CONTENT */}
      <section className="contact-main" id="contact-form">
        <div className="contact-info">
          <span className="contact-eyebrow">01 / GET IN TOUCH</span>

          <h2>
            GOOD THINGS
            <br />
            START WITH
            <br />
            A <span>HELLO.</span>
          </h2>

          <p className="contact-intro">
            Whether you need a website, a mobile application, an AI-powered
            solution or custom software, I'd love to hear what you're working on.
          </p>

          <div className="contact-methods">
            <a href="mailto:briangitonga3@gmail.com" className="contact-method">
              <span className="contact-method-icon">
                <FaEnvelope />
              </span>

              <span className="contact-method-text">
                <small>EMAIL ME</small>
                <strong>briangitonga3@gmail.com</strong>
              </span>

              <span className="contact-method-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/254757791562"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <span className="contact-method-icon">
                <FaWhatsapp />
              </span>

              <span className="contact-method-text">
                <small>CHAT ON WHATSAPP</small>
                <strong>Let's talk about your project</strong>
              </span>

              <span className="contact-method-arrow">↗</span>
            </a>
          </div>

          <div className="contact-location">
            <span>BASED IN</span>
            <strong>KENYA · WORKING WORLDWIDE</strong>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <span className="contact-eyebrow">02 / PROJECT INQUIRY</span>
            <p>Tell me a little about what you have in mind.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">YOUR NAME *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-service">WHAT DO YOU NEED? *</label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Other">Something else</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-budget">PROJECT BUDGET</label>
                <select
                  id="contact-budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select a budget</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 - $1,000">$500 – $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">TELL ME ABOUT YOUR PROJECT *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What are you looking to build? What problem are you trying to solve?"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              SEND PROJECT INQUIRY
              <FaArrowRight />
            </button>

            <p className="contact-form-note">
              Your email app will open with your project details ready to send.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}