import useUserStore from "../../store/useUserStore";
import loginService from "../../services/loginService";
import styles from "./Profile.module.css";

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
    <div className={styles.container}>
      {user && <p className={styles.info}>{user.email} currently logged in</p>}
      <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
    </div>
  );
}

export default Profile;
