import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function sendMessage(conversationId, text, sender = "user") {
  await addDoc(collection(db, `conversations/${conversationId}/messages`), {
    text,
    sender,
    createdAt: serverTimestamp()
  });
}
