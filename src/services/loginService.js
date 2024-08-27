import useUserStore from "../store/useUserStore";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password_hash: password }, {withCredentials: true})

    const { setUser, setIsAuthenticated } = useUserStore.getState();
    setUser({ email });
    setIsAuthenticated(true)

    return {
      message: "successful",
    };
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export default { loginUser };
