
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Replace these with your own contact details
  const myEmail = "songujang5@gmail.com";
  const myWhatsApp = "2348148657874";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Send message through Email
  function handleSendEmail() {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent("Portfolio Contact Message");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${myEmail}?subject=${subject}&body=${body}`;
  }

  // Send message through WhatsApp
  function handleSendWhatsApp() {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please complete all fields.");
      return;
    }

    const text = encodeURIComponent(
      `Hello! My name is ${name}.\nMy Email: ${email}\n\n${message}`
    );

    const whatsappURL =
      `https://wa.me/${myWhatsApp}?text=${text}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="contact-page">

      {/* Left Side - About Me */}
      <div className="contact-about">
        <h1>Get in Touch</h1>

        <h2>About Me</h2>

        <p>
          Hello! I'm an aspiring software engineer
          who enjoys learning programming and
          building useful digital experiences.
        </p>

        <p>
          I'm currently improving my skills in
          HTML, CSS, JavaScript, and React.
        </p>

        <h3>My Interests</h3>

        <ul>
          <li>Web Development</li>
          <li>Technology</li>
          <li>Problem Solving</li>
          <li>Learning New Skills</li>
        </ul>

        <h3>Let's Connect!</h3>

        <p>
          I'm always interested in learning,
          sharing ideas, and connecting with
          other developers.
        </p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form-container">
        <h2>Send Me a Message</h2>

        <form onSubmit={(event) => event.preventDefault()}>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="button"
            className="email-button"
            onClick={handleSendEmail}
          >
            Send Email
          </button>

          <button
            type="button"
            className="whatsapp-button"
            onClick={handleSendWhatsApp}
          >
            Send via WhatsApp
          </button>

        </form>
      </div>

    </section>
  );
}

export default Contact;
