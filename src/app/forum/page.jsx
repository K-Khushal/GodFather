import React from "react";
import {Input} from "@nextui-org/react";
import {Skeleton} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function App() {
    return (
        <main className="p-8">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="text" label="Username" />
                <Button color="secondary" className="h-26 w-36">
                    SET
                </Button>
            </div>
            <div className="container mx-auto bg-[#27272A] m-8 p-2 rounded-md flex flex-col gap-3">
                <div className="flex gap-3 items-center ">
                    <p>Akshay :</p>
                    <Skeleton className="h-3 w-4/5 rounded-lg"/>
                </div>
                <div className="flex gap-3 items-center ">
                    <p>Khushal :</p>
                    <Skeleton className="h-3 w-4/5 rounded-lg"/>
                </div>
                <div className="flex gap-3 items-center ">
                    <p>Akshay :</p>
                    <Skeleton className="h-3 w-4/5 rounded-lg"/>
                </div>
                <div className="flex gap-3 items-center ">
                    <p>Khushal :</p>
                    <Skeleton className="h-3 w-4/5 rounded-lg"/>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Textarea
                    label="Message"
                    placeholder="Enter your message"
                    className=""
                />
                <Button color="primary" className="h-12 w-24">
                    Send
                </Button>
            </div>

        </main>
    );
}
