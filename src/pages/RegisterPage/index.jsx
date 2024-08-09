import { useState } from "react";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  const [fullNameInput, setFullNameInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailInput(emailInput);
    setPasswordInput(passwordInput);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullNameInput}
          onChange={(e) => setFullNameInput(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default RegisterPage;
