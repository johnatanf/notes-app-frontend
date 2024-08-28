import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import NoteAppPage from "./pages/NoteAppPage";
import RegisterPage from "./pages/RegisterPage";
import useUserStore from "./store/useUserStore";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useUserStore();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/auth/status`, { withCredentials: true });
        if (response.data.authenticated) {
          setIsAuthenticated(true);
          setUser({ email: response.data.email })
          console.log(response.data.email)
        }

      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();

  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/note-app"
          element={isAuthenticated ? <NoteAppPage /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/note-app" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
