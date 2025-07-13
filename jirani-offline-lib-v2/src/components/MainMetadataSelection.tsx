import { useState } from "react"
import MetadataEnableButton from './MetadataEnableButton'
import MetadataFields from './MetadataFields'

export default function MainMetadataSelection() {

    const [isMetadataVisible, setMetadataVisible] = useState(false);

    function toggleMetadataFields() {
        setMetadataVisible(!isMetadataVisible);
    }

    return (
        <>
            <div className="card">
                <div className="card-header text-start d-flex justify-content-between align-items-center">
                    <p className="fs-4">Optional Data</p>
                    <MetadataEnableButton enabling_metadata={!isMetadataVisible} onToggle={toggleMetadataFields} />
                </div>
                <div className="card-body">
                     {isMetadataVisible && <MetadataFields />}
                </div>
            </div>
            
           

        </>
    )
}