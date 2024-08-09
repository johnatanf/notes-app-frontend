import useUserStore from '../../store/useUserStore'
import './Profile.module.css'

function Profile() {
  const user = useUserStore((state) => state.user)

  return (
    <>
      <div>
        { user ? <p>{user.email} currently logged in</p> : null }
      </div>
    </>
  )
}

export default Profile
