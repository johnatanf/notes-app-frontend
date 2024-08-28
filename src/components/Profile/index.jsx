import useUserStore from "../../store/useUserStore";
import loginService from "../../services/loginService";
import "./Profile.module.css";

function Profile() {
  const user = useUserStore((state) => state.user);

  const handleLogout = async () => {
    try {
      await loginService.logoutUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>{user ? <p>{user.email} currently logged in</p> : null}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
