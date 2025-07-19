import { useState } from 'react'

import FileSelect from './FileSelection'
import MainMetadataSelection from './MainMetadataSelection'
import HeaderSection from './HeaderSection';
import StatusAlert from './StatusAlerts'

const uploadDir = '/upload';

export default function PageSections() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [alertStatusBool, setAlertStatusBool] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    function sendNewAlert(message: string) {
        setAlertMessage(message);
        setAlertStatusBool(true);
    }

    async function handleBookUpload() {
        if (!selectedFile) {
            sendNewAlert('No File Selected');
            return;
        }

        const formInformation = document.getElementById('upload-form') as HTMLFormElement;
        const formData = new FormData(formInformation);

        formData.append('file', selectedFile);//Also add file information
        

        try {//trying to get the requset to the backend
            const response = await fetch(uploadDir, {
                method: 'POST',
                body: formData
            });

            const jsonData = await response.json();

            if (!response.ok)
                throw new Error(jsonData.message || 'Something went wrong') //I don't understand this
            sendNewAlert('File Uploaded!');

        } catch (error) {
            sendNewAlert('Error uploading file');
        }

    }
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0])
            setSelectedFile(event.target.files[0]);

    };

    return (
        <>
            <HeaderSection />
            <StatusAlert setAlertStatus={setAlertStatusBool} message={alertMessage} alertStatus={alertStatusBool} />
            <div className='container-md mt-4'>
                <div className="my-3 py-3 bg-light">
                    <FileSelect onFileChange={handleFileChange} />
                </div>
                <div className="my-3 py-3">
                    <MainMetadataSelection />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button type="submit" form="upload-form" onClick={handleBookUpload} className='btn btn-outline-dark fs-4'>
                    Upload Book to Library
                </button>
            </div>
        </>
    );
}   