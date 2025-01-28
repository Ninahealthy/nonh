import Styles from "@/styles/contact.module.css";
import React, { useState } from "react";
import Head from "next/head";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://www.ninahealthy.com/api/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page for ninahealthy.com" />
      </Head>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <h1>contact@ninahealthy.com</h1>
        <label className={Styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={Styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className={Styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={Styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className={Styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={Styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className={Styles.button} type="submit">
          Send
        </button>
      </form>
    </>
  );
}
