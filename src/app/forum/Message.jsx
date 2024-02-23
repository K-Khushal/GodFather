import Image from "next/image";
import React from "react";


export default function Message({ message }) {
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
                    <div className="text-sm font-medium">{message.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</div>
                </div>
                <div className="text-sm">
                    {message.text}
                </div>
            </div>
        </div>
    )
}