import useUserStore from "../store/useUserStore";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const registerUser = async (fullName, username, email, password) => {
  const { setUser, setIsAuthenticated } = useUserStore.getState();

  try {
    const newUser = await axios.post(
      `${apiUrl}/register`,
      {
        full_name: fullName,
        username,
        email,
        password,
      },
      { withCredentials: true }
    );

    setUser({ email });
    setIsAuthenticated(true);

    return {
      message: "successful register user",
    };
  } catch (error) {
    console.error("Error registering:", error);
    setUser({}, null);
    setIsAuthenticated(false);
    throw error;
  }
};

export default { registerUser };
