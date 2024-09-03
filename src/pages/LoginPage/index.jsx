import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginService";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginService.loginUser(emailInput, passwordInput);
    navigate("/notes-app");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <a href="/register" className={styles.link}>Register</a>
    </div>
  );
}

export default LoginPage;
