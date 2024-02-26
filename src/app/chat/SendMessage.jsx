import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import SendIcon from "@/app/chat/SendIcon";

export default function SendMessage({ username, photoURL, uid, scroll }) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "" || isSending) {
            setError("Enter valid message");
            return;
        }
        setIsSending(true);
        setError(null);
        await addDoc(collection(db, "messages"), {
            text: message,
            name: username,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        }).then(() => {
            setMessage("");
            scroll.current.scrollIntoView({ behavior: "smooth" });
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <div className="p-4">
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" onSubmit={(event) => sendMessage(event)}>
                <Input className="flex-1" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} errorMessage={error}/>
                <Button className="w-full sm:w-auto h-14" color="secondary" type="submit" disabled={isSending}>Send message
                    {/*<SendIcon/>*/}
                </Button>
            </form>
        </div>
    );
}