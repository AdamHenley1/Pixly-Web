"use client";

import Head from "next/head";
import React, { useState, FormEvent } from "react";
import styles from "../../lib/css/main.module.css"; // Adjust if needed
import '../../lib/css/globals.css';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add confirm password check if needed
  };

  return (
    <>
      <Head>
        <title>Sign-Up</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="description" content="Art Portfolio website" />
      </Head>

      <div className={styles.background_circle2}></div>
      <div className={styles.background_circle1}></div>

      <div className={`${styles.Sign_Up} ${styles.glass}`}>
        <h1>Sign-Up</h1>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <form action="/register" method="POST" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign-Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
