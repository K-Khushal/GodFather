import Image from "next/image";
import React from "react";


export default function Message({ message }) {

    // Convert the Firestore Timestamp to a JavaScript Date object
    const date = message.createdAt ? new Date(message.createdAt.seconds * 1000) : new Date();
    // Get the current time
    const now = new Date();

    // Calculate the difference in seconds
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let timeAgo;

    if (diffInSeconds < 0) {
        timeAgo = `0 seconds ago`;
    }
    else if (diffInSeconds < 60) {
        // Less than a minute
        timeAgo = `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
        // Less than an hour
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        timeAgo = `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
        // Less than a day
        const diffInHours = Math.floor(diffInSeconds / 3600);
        timeAgo = `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
        // More than a day
        const diffInDays = Math.floor(diffInSeconds / 86400);
        timeAgo = `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }

    return (
        <div className="flex items-start gap-4">
            <Image
                alt="Profile picture"
                className="rounded-full"
                height="40"
                src={message.avatar}
                style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                }}
                width="40"
            />
            <div className="flex-1 grid gap-1">
                <div className="flex items-center space-x-2">
                    <div className={`text-sm font-medium ${message.name === "Akshay" || message.name === "itzKhushal" ? "text-red-500" : ""}`}>{message.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{timeAgo}</div>
                </div>
                <div className="text-sm">
                    {message.text}
                </div>
            </div>
        </div>
    )
}