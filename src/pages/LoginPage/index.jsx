import { useState } from "react";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailInput(emailInput);
    setPasswordInput(passwordInput);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default LoginPage;
