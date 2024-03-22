import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function VoiceMessageSender({ uid, onAudioUpload }) {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedBlobs, setRecordedBlobs] = useState([]);

    const handleStartRecording = () => {
        const options = { mimeType: 'audio/webm' };

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                const newMediaRecorder = new MediaRecorder(stream, options);

                newMediaRecorder.onstop = (event) => {
                    console.log('Recorder stopped: ', event);
                    console.log('Recorded Blobs: ', recordedBlobs);
                };

                newMediaRecorder.ondataavailable = (event) => {
                    if (event.data && event.data.size > 0) {
                        setRecordedBlobs(prev => [...prev, event.data]);
                    }
                };

                newMediaRecorder.start(10); // collect 10ms of data
                setMediaRecorder(newMediaRecorder);
            })
            .catch(err => {
                console.log('Error getting media stream:', err);
            });
    };

    const handleStopRecording = () => {
        mediaRecorder.stop();

        const superBuffer = new Blob(recordedBlobs, { type: 'audio/webm' });

        // Upload recorded audio to Firebase Storage
        const storageRef = ref(storage);
        const audioRef = ref(storageRef,`audio/${uid}_${Date.now()}.webm`);
        uploadBytes(audioRef, superBuffer)
            .then((snapshot) => {
                // Get download URL of the uploaded audio
                return getDownloadURL(snapshot.ref);
            })
            .then((downloadURL) => {
                // Call the onAudioUpload prop with the download URL
                onAudioUpload(downloadURL);
            })
            .catch((error) => {
                console.error('Error uploading audio:', error);
            });
    };

    const handleStartStopRecording = () => {
        if (isRecording) {
            // Stop recording
            handleStopRecording();
            setIsRecording(false);
        } else {
            // Start recording
            handleStartRecording();
            setIsRecording(true);
        }
    };

    const handleClearAudio = () => {
        setRecordedBlobs([]);
    };

    return (
        <div>
            <Button onClick={handleStartStopRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            <Button onClick={handleClearAudio}>
                Clear Audio
            </Button>
        </div>
    );
}

export default VoiceMessageSender;