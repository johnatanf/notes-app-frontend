import uuid4 from "uuid4";
import useUserStore from "../store/useUserStore";

const registerUser = async (fullName, username, email, password) => {
  try {
    const { setUser } = useUserStore.getState();
    setUser({ email }, uuid4());

    return {
      message: "successful",
    };
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};

export default { registerUser };
