import {User} from 'firebase/auth'
import {useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'
import {logOut, signInWithGoogle} from '../service/firebase'

export default function Header() {
  const currentUser: User | null = useContext(AuthContext).currentUser

  const userStatusDisplay = () => {
    if (currentUser) {
      return (
        <>
          <button onClick={logOut}>
            logout
          </button>
          <div>
            user name : {currentUser.displayName}
          </div>
        </>
      )
    }
    return (
      <>
        <button onClick={signInWithGoogle}>
          sign in
        </button>
        <div>
          user name : guest
        </div>
      </>
    )
  }

  return (
    <header>
      {userStatusDisplay()}
    </header>
  )
}
