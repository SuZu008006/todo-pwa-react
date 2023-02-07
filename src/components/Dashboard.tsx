import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";
import {User} from "firebase/auth";
import {logOut, signInWithGoogle} from "../service/firebase";


export default function Dashboard() {
    const currentUser: User | null = useContext(AuthContext).currentUser

    const formRender = () => {
        let dom
        if (currentUser) {
            dom = <form>
                <input placeholder="ToDoName"/>
                <button onClick={logOut}>logout</button>
            </form>
        } else {
            dom = <button onClick={signInWithGoogle}>login</button>
        }
        return dom
    }

    return (
        <div>
            {formRender()}
        </div>
    )
}