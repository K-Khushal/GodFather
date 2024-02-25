"use client";

import React, {useEffect, useRef, useState} from 'react';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import {Avatar} from "@nextui-org/react";
import MessageList from "@/app/forum/MessageList";
import SendMessage from "@/app/forum/SendMessage";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function App() {

    const [username, setUsername] = useState(localStorage.getItem('username') || "");
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [error, setError] = useState(null);
    const [uid, setUid] = useState(localStorage.getItem('uid') || null);
    const [photoURL, setPhotoURL] = useState(localStorage.getItem('photoURL') || "");
    const scroll = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localUsername = localStorage.getItem('username') || "";
            setUsername(localUsername);
            const localUid = localStorage.getItem('uid') || null;
            setUid(localUid);
            const localPhotoURL = localStorage.getItem('photoURL') || "";
            setPhotoURL(localPhotoURL);

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
        }
    }, []);

    useEffect(() => {
        // const hasOpened = localStorage.getItem("hasOpened");
        // if (!hasOpened) {
        //     localStorage.setItem("hasOpened", true);
        //     onOpen();
        //     setHasOpenedBefore(true);
        // }
        onOpen();
    }, [onOpen]);

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
        else if (!/^[a-zA-Z0-9]+$/.test(newUsername.trim())) {
            setError("Username cannot contain special characters");
            return;
        }
        else if (newUsername.trim().toLowerCase() === "itzkhushal") {
            setError("This username is not allowed");
            return;
        }
        else if (newUsername === username) {
            setEditing(false);
            setError(null);
            return;
        }

        setUsername(newUsername);
        localStorage.setItem('username', newUsername);

        let photoURL;
        if (username.toLowerCase() === "itzkhushal") {
            photoURL = `https://live.staticflickr.com/5511/14407668681_2657ca01fe_m.jpg`
        } else {
            photoURL = `https://robohash.org/${username}.png`;
        }
        setPhotoURL(photoURL);
        localStorage.setItem('photoURL', photoURL);

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

    return (
        <main className="p-5 bg-black text-white">
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
                    <span ref={scroll}></span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800">
                    <SendMessage username={username} uid={uid} photoURL={photoURL} scroll={scroll}/>
                </div>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        <>
                            <ModalHeader className="flex flex-col gap-1">Warning: Respectful Communication Policy</ModalHeader>
                            <ModalBody>
                                <p>
                                    Please refrain from using offensive language, religious content, or anything that may hurt others. Treat everyone with kindness and respect. Lets create a positive and inclusive environment together. Thank you for your cooperation.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    I disagree
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    I agree
                                </Button>
                            </ModalFooter>
                        </>
                    </ModalContent>
                </Modal>
            </div>
        </main>
    );
}
