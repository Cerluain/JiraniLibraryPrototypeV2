import { useState } from "react"
import MetadataEnableButton from './MetadataEnableButton'
import MetadataFields from './MetadataFields'

export default function MainMetadataSelection(){

    const [isMetadataVisible, setMetadataVisible]  = useState(false);

    function toggleMetadataFields(){
        setMetadataVisible(!isMetadataVisible);
    }

    return (
        <>
            <MetadataEnableButton enabling_metadata={!isMetadataVisible} onToggle={toggleMetadataFields}/>
            {isMetadataVisible && <MetadataFields /> }
        
        </>
    )
}