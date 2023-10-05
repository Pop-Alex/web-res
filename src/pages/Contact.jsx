import React, { useState } from "react";
import transitions from "../transitions";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const notify = () => {
    alert("h1: " + formData.name);
  };
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> Enter your name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor=""> Enter your email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor=""> Give us your feedback</label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}></textarea>
        <button onClick={notify} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default transitions(Contact);
