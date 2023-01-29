import React, {ReactNode, useEffect, useState} from 'react'
import {onAuthStateChanged, User} from 'firebase/auth'
import {auth} from '../service/firebase'

export const AuthContext = React.createContext<{
  currentUser: User | null,
}>({
  currentUser: null,
})

type Props = {
  children: ReactNode
}

export const AuthProvider = ({children}: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    username()
  }, [])

  const username = () => {
    onAuthStateChanged(
      auth,
      setCurrentUser
    )
  }

  return (
    <AuthContext.Provider
      value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
