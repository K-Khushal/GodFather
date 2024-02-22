"use client";

import React, { useState } from 'react';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';
import {Avatar} from "@nextui-org/react";
import Image from "next/image";
export default function App() {

    const [username, setUsername] = useState("Jane Smith");
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [error, setError] = useState(null);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        if (newUsername.trim() === "") {
            setError("Username cannot be empty");
            return;
        }
        setUsername(newUsername);
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
            <div className="flex flex-col h-[480px] rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="font-semibold flex flex-row items-center">
                            <Avatar className="mx-2 mr-4" src={`https://robohash.org/${username}.png`} />
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
                    <div className="grid gap-4">
                        <div className="flex items-start gap-4">
                            <Image
                                alt="Profile picture"
                                className="rounded-full"
                                height="40"
                                src={`https://robohash.org/${username}.png`}
                                style={{
                                    aspectRatio: "40/40",
                                    objectFit: "cover",
                                }}
                                width="40"
                            />
                            <div className="flex-1 grid gap-1">
                                <div className="flex items-center space-x-2">
                                    <div className="text-sm font-medium">Jane Smith</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</div>
                                </div>
                                <div className="text-sm">
                                    Hi there! Just wanted to follow up on our conversation from yesterday. Do you have the latest numbers?
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Image
                                alt="Profile picture"
                                className="rounded-full"
                                height="40"
                                src=""
                                style={{
                                    aspectRatio: "40/40",
                                    objectFit: "cover",
                                }}
                                width="40"
                            />
                            <div className="flex-1 grid gap-1">
                                <div className="flex items-center space-x-2">
                                    <div className="text-sm font-medium">John Doe</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">5 minutes ago</div>
                                </div>
                                <div className="text-sm">
                                    Hey! Yes, Ive got the report ready. Ill send it over to you in the next 10 minutes.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Image
                                alt="Profile picture"
                                className="rounded-full"
                                height="40"
                                src=""
                                style={{
                                    aspectRatio: "40/40",
                                    objectFit: "cover",
                                }}
                                width="40"
                            />
                            <div className="flex-1 grid gap-1">
                                <div className="flex items-center space-x-2">
                                    <div className="text-sm font-medium">Alice Johnson</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">10 minutes ago</div>
                                </div>
                                <div className="text-sm">
                                    Good morning! I hope your having a great day so far. I wanted to remind everyone about the team
                                    meeting at 3 pm. Dont forget to bring your ideas and enthusiasm!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800">
                    <div className="p-4">
                        <form className="flex space-x-4">
                            <Input className="flex-1" placeholder="Type a message" />
                            <Button className="p-6 h-14" color="secondary">Send message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
