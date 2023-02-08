import { User } from 'firebase/auth'
import { useContext, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import * as Api from '../service/api'
import { signInWithGoogle } from '../service/firebase'


export default function Dashboard() {
  const currentUser: User | null = useContext(AuthContext).currentUser
  const [inputName, setInputName] = useState('')

  const formRender = () => {
    let dom
    if (currentUser) {
      dom = <form>
        <input
          placeholder="ToDoName"
          onChange={(e) => setInputName(e.currentTarget.value)}
        />
        <button type={'button'} onClick={post}>add</button>
      </form>
    } else {
      dom = <button onClick={signInWithGoogle}>login</button>
    }
    return dom
  }

  const post = async () => {
    await Api.addTodo(inputName, currentUser?.uid)
  }

  return (
    <div>
      {formRender()}
    </div>
  )
}