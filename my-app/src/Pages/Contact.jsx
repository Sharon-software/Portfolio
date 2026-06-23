import React from 'react'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
   const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending")
    try {
      await emailjs.send(
        "service_ix2clki",
        "template_wyi1jtt",      
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          message: formData.message,
        },
        "SeDxa7LVSd7lNLQyq"       
      );

      setStatus("success");
      setFormData({ name: "", company: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };
  return (
      <div className="contact-wrapper">
      <h2>Get In Touch</h2>
      <p>Fill out the form below and I'll get back to you.</p>

      <div className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="6"
            required
          />
        </div>
       
       {status === "success" && (
          <p className="success-msg">✓ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-msg">✗ Something went wrong. Please try again.</p>
        )}
        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        
      </div>
      <div className="social-links">
        <a href="https://wa.me/27698783115" target="_blank" rel="noreferrer" className="social-icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/sharon-software" target="_blank" rel="noreferrer" className="social-icon github">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/sharon-mathebula-118302250" target="_blank" rel="noreferrer" className="social-icon linkedin">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Contact
