import {useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'
import {signInWithGoogle} from '../service/firebase'
import {User} from 'firebase/auth'

const Header = () => {
  const currentUser: User | null = useContext(AuthContext).currentUser

  return (
    <header>
      ヘッダー的な何か
      <button
        onClick={signInWithGoogle}
      >
        ログインボタン的な何か
      </button>
      {currentUser &&
          <div>
            現在のログインユーザー : {currentUser.displayName}
          </div>
      }
    </header>
  )
}

export default Header
