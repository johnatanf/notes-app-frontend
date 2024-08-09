import uuid4 from "uuid4";
import useUserStore from "../store/useUserStore";

const loginUser = async (email, password) => {
  try {
    const { setUser } = useUserStore.getState();
    setUser({ email }, uuid4());

    return {
      message: "successful",
    };
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export default { loginUser };
