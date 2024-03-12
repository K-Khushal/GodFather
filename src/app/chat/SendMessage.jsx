import {Button, Input} from "@nextui-org/react";
import React, {useState} from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { storage } from "../firebase";
import ImageIcon from "./ImageIcon";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default function SendMessage({ username, photoURL, uid, scroll }) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const [file, setFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");

    const forbiddenWordsSet = new Set([
        "aad", "aand", "bahenchod", "behenchod", "bhenchod", "bhenchodd", "b.c.", "bc", "bakchod", "bakchodd", "bakchodi",
        "bevda", "bewda", "bevdey", "bewday", "bevakoof", "bevkoof", "bevkuf", "bewakoof", "bewkoof", "bewkuf", "bhadua",
        "bhaduaa", "bhadva", "bhadvaa", "bhadwa", "bhadwaa", "bhosada", "bhosda", "bhosdaa", "bhosdike", "bhonsdike",
        "bsdk", "b.s.d.k", "bhosdiki", "bhosdiwala", "bhosdiwale", "bhosadchodal", "bhosadchod", "bhosadchodal",
        "bhosadchod", "babbe", "babbey", "bube", "bubey", "bur", "burr", "buurr", "buur", "charsi", "chooche",
        "choochi", "chuchi", "chhod", "chod", "chodd", "chudne", "chudney", "chudwa", "chudwaa", "chudwane",
        "chudwaane", "choot", "chut", "chute", "chutia", "chutiya", "chutiye", "chuttad", "chutad", "dalaal",
        "dalal", "dalle", "dalley", "fattu", "gadha", "gadhe", "gadhalund", "gaand", "gand", "gandu", "gandfat",
        "gandfut", "gandiya", "gandiye", "goo", "gu", "gote", "gotey", "gotte", "hag", "haggu", "hagne", "hagney",
        "harami", "haramjada", "haraamjaada", "haramzyada", "haraamzyaada", "haraamjaade", "haraamzaade", "haraamkhor",
        "haramkhor", "jhat", "jhaat", "jhaatu", "jhatu", "kutta", "kutte", "kuttey", "kutia", "kutiya", "kuttiya",
        "kutti", "landi", "landy", "laude", "laudey", "laura", "lora", "lauda", "ling", "loda", "lode", "lund",
        "launda", "lounde", "laundey", "laundi", "loundi", "laundiya", "loundiya", "lulli", "maar", "maro", "marunga",
        "madarchod", "madarchodd", "madarchood", "madarchoot", "madarchut", "m.c.", "mc", "mamme", "mammey", "moot",
        "mut", "mootne", "mutne", "mooth", "muth", "nunni", "nunnu", "paaji", "paji", "pesaab", "pesab", "peshaab",
        "peshab", "pilla", "pillay", "pille", "pilley", "pisaab", "pisab", "pkmkb", "porkistan", "raand", "rand",
        "randi", "randy", "suar", "tatte", "tatti", "tatty", "ullu"
    ]);

    const sendMessage = async (event) => {
        event.preventDefault();

        // Split message into words and check if any word is in the forbidden words set
        const words = message.toLowerCase().split(/\s+/);
        const containsForbiddenWord = words.some(word => forbiddenWordsSet.has(word));

        if (containsForbiddenWord) {
            setError("Message contains inappropriate words");
            return;
        }
        else if (message.trim() === "" || isSending) {
            setError("Enter valid message");
            return;
        }
        setIsSending(true);
        setError(null);

        let imageUrl = null; // Define imageUrl here

        if (file) {
            const storageRef = ref(storage);
            const imageRef = ref(storageRef, file.name);
            await uploadBytes(imageRef, file);
            imageUrl = await getDownloadURL(imageRef); // Assign the URL to imageUrl
        }

        await addDoc(collection(db, "messages"), {
            text: message,
            name: username,
            avatar: photoURL,
            image: imageUrl,
            createdAt: serverTimestamp(),
            uid,
        }).then(() => {
            console.log("message did not send")
            setMessage("");
            setFile(null); // Clear the file
            setSelectedFileName(""); // Clear the file name
            document.querySelector('input[type="file"]').value = "";
            scroll.current.scrollIntoView({ behavior: "smooth" });
        }).finally(() => {
            setIsSending(false);
            console.log("message send succesfuly")
        });
    };

    const handleImageUpload = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile); // Set the selected file
        setSelectedFileName(selectedFile ? selectedFile.name : ""); // Set the selected file name
    };

    return (
        <div className="p-4">
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" onSubmit={(event) => sendMessage(event)}>
                <Input className="flex-1" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} errorMessage={error}/>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
                <Button
                    className="text-gray-600 dark:text-gray-400 h-14"
                    variant="ghost"
                    onClick={() => document.querySelector('input[type="file"]').click()}
                >
                    <ImageIcon/>
                    {selectedFileName && <p>{selectedFileName}</p>}
                </Button>

                <Button className="w-full sm:w-auto h-14" color="secondary" type="submit" disabled={isSending}>Send message
                    {/*<SendIcon/>*/}
                </Button>
            </form>
        </div>
    );
}