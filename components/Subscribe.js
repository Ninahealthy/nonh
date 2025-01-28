"use client";
import { useState } from "react";
import styles from "./Contact/cont.module.css";

export default function Subscribe() {
  // state variables for the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // state variable for the form submission status
  const [status, setStatus] = useState("");

  // handle form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send a POST request to the API route
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    // get the response data
    const data = await res.json();
    // set the status based on the response
    if (data.success) {
      setStatus("Thanks!");
      // reset the form inputs
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <div className={styles.form}>
        <div className={styles.card}>
          <h2>never miss a post !</h2>

          <p>
            Get the latest holistic health tips, recipes, and wellness insights
            delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className={styles.status}>{status}</p>
    </>
  );
}
