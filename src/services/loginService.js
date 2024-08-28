import useUserStore from "../store/useUserStore";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

const loginUser = async (email, password) => {
  const { setUser, setIsAuthenticated } = useUserStore.getState();

  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password_hash: password }, {withCredentials: true})
    
    setUser({ email });
    setIsAuthenticated(true)

    return {
      message: "successful",
    };
  } catch (error) {
    console.error("Error logging in:", error);
    setIsAuthenticated(false)
    throw error;
  }
};

export default { loginUser };
