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
                    <p className="fs-4">
                        <i className="bi bi-file-earmark-plus">
                            Optional Data</i>
                    </p>

                    <MetadataEnableButton enabling_metadata={!isMetadataVisible} onToggle={toggleMetadataFields} />
                </div>
                <div className="card-body">
                    {isMetadataVisible ? <MetadataFields /> : <p className="justisfy-content-center fs-4" >...</p>}
                </div>

            </div>



        </>
    )
}