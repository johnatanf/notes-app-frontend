import useStore from '../../store/useUserStore'
import './Profile.module.css'

function Profile() {
  const user = useStore((state) => state.user)

  return (
    <>
      <div>
        { user ? <p>{user.username} currently logged in</p> : null }
      </div>
    </>
  )
}

export default Profile
