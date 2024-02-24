import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SendMessage({ username, photoURL, uid, scroll }) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            setError("Enter valid message");
            return;
        }
        setError(null);
        await addDoc(collection(db, "messages"), {
            text: message,
            name: username,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="p-4">
            <form className="flex space-x-4" onSubmit={(event) => sendMessage(event)}>
                <Input className="flex-1" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} errorMessage={error}/>
                <Button className="p-6 h-14" color="secondary" type="submit">Send message</Button>
            </form>
        </div>
    );
}