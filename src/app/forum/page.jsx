"use client";

import React, {useEffect, useState} from 'react';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import {Avatar} from "@nextui-org/react";
import Image from "next/image";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import MessageList from "@/app/forum/MessageList";
export default function App() {

    const [username, setUsername] = useState(localStorage.getItem('username') || "");
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [uid, setUid] = useState(localStorage.getItem('uid') || null);
    const [photoURL, setPhotoURL] = useState(localStorage.getItem('photoURL') || "");

    useEffect(() => {
        if (!uid || !username || !photoURL) {
            // Generate a random UID
            const randomUid = generateRandomUid();
            setUid(randomUid);
            localStorage.setItem('uid', randomUid);

            if (!username) {
                const randomDisplayName = `User${randomUid}`; // Modify display name here
                setUsername(randomDisplayName);
                localStorage.setItem('username', randomDisplayName);

                const randomPhotoURL = `https://robohash.org/${username}.png`;
                setPhotoURL(randomPhotoURL);
                localStorage.setItem('photoURL', randomPhotoURL);
            }
        }
    }, []);

    const generateRandomUid = () => {
        // Generate a random UID (for demonstration purposes only)
        return Math.floor(Math.random() * 10000).toString();
    };
    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        if (newUsername.trim() === "") {
            setError("Username cannot be empty");
            return;
        }
        setUsername(newUsername);
        localStorage.setItem('username', newUsername);
        setEditing(false);
        setError(null);
    };

    const handleCancelClick = () => {
        setNewUsername(username);
        setEditing(false);
        setError(null);
    };

    const handleChange = (e) => {
        setNewUsername(e.target.value);
    };

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        await addDoc(collection(db, "messages"), {
            text: message,
            name: username,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
    };

    return (
        <main className="p-5">
            <div className="flex flex-col h-[480px] rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="font-semibold flex flex-row items-center">
                            <Avatar className="mx-2 mr-4" src={photoURL} />
                            {editing ? (
                                <Input
                                    size="sm"
                                    type="text"
                                    value={newUsername}
                                    onChange={handleChange}
                                    errorMessage={error}
                                />
                            ) : (
                                username
                            )}
                        </div>
                        {editing ? (
                            <>
                                <Button
                                    size="lg"
                                    color="success"
                                    onClick={handleSaveClick}
                                >
                                    Save
                                </Button>
                                <Button
                                    size="lg"
                                    color="danger"
                                    onClick={handleCancelClick}
                                >
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button
                                onClick={handleEditClick}
                                radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                            >
                                Change username
                            </Button>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button isIconOnly color="danger" aria-label="Like">
                            <HeartIcon />
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col p-4 overflow-y-auto">
                    <MessageList />
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800">
                    <div className="p-4">
                        <form className="flex space-x-4" onSubmit={(event) => sendMessage(event)}>
                            <Input className="flex-1" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                            <Button className="p-6 h-14" color="secondary" type="submit">Send message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
