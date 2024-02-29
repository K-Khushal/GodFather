"use client";

import React, {useEffect, useRef, useState} from 'react';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import {Avatar} from "@nextui-org/react";
import MessageList from "@/app/chat/MessageList";
import SendMessage from "@/app/chat/SendMessage";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function App() {

    const [username, setUsername] = useState("");
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [error, setError] = useState(null);
    const [uid, setUid] = useState(null);
    const [photoURL, setPhotoURL] = useState("");
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

            if (!localUid) {
                // Generate a random UID
                const randomUid = generateRandomUid();
                setUid(randomUid);
                localStorage.setItem('uid', randomUid);
            }

            if (!localUsername) {
                if (!uid) {
                    return; // Wait for uid to be set
                }

                // Generate a random username and photoURL
                const randomDisplayName = `User${uid}`; // Modify display name here
                setUsername(randomDisplayName);
                localStorage.setItem('username', randomDisplayName);

                const randomPhotoURL = `https://robohash.org/${randomDisplayName}.png`;
                setPhotoURL(randomPhotoURL);
                localStorage.setItem('photoURL', randomPhotoURL);
            }
        }
    }, [uid]);

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
            setError("Admin ka username nahi le skate ho bhaiya!");
            return;
        }
        else if (newUsername.trim().toLowerCase() === "akshay") {
            setError("Chal be chal, tu Akshay nahi hai!");
            return;
        }
        else if (newUsername === username) {
            setEditing(false);
            setError(null);
            return;
        }
        else if(newUsername.trim().toLowerCase() === "062004khushal"){
            const myName = "itzKhushal";
            setUsername(myName);
            localStorage.setItem('username', myName);
        }
        else{
            setUsername(newUsername);
            localStorage.setItem('username', newUsername);
        }

        let photoURL;
        if (newUsername.toLowerCase() === "itzkhushal" || newUsername.trim().toLowerCase() === "062004khushal") {
            photoURL = `https://live.staticflickr.com/5511/14407668681_2657ca01fe_m.jpg`
        } else {
            photoURL = `https://robohash.org/${newUsername}.png`;
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
        <main className="p-5">
            <div className="flex flex-col md:h-[495px] h-screen rounded-lg border border-gray-200 dark:border-gray-800 bg-white/10">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row sm:justify-center items-center space-x-4">
                        <div className="font-semibold flex items-center">
                            <Avatar className="mx-1 md:mx-2 mr-2 md:mr-4" src={photoURL} />
                            {editing ? (
                                <Input
                                    size="sm"
                                    type="text"
                                    value={newUsername?newUsername:newUsername}
                                    onChange={handleChange}
                                    errorMessage={error}
                                />
                            ) : (
                                username
                            )}
                        </div>
                        {editing ? (
                            <div className="flex justify-center items-center gap-2 mt-4 pl-6 md:pl-0 md:mt-0">
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
                            </div>
                        ) : (
                            <Button
                                onClick={handleEditClick}
                                radius="full" className="bg-gradient-to-tr
                                 from-pink-500 to-yellow-500 mt-2 md:mt-0 text-white shadow-lg"
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
                <Modal isOpen={isOpen} onClose={onClose} placement="center" isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent className="text-white">
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
