import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "./firebase"

export const addTodo = async (content, uid) => {
    await addDoc(collection(db, "todo"), {
        content: "content data",
        uid: uid,
        isComplete: false,
        createdAt: serverTimestamp(),
    })
}