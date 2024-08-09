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

function App() {
  const { user, setUser, token } = useUserStore();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/note-app"
          element={user && token ? <NoteAppPage /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={user && token ? "/note-app" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
