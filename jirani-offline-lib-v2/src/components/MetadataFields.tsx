export default function MetadataFields(){
    return(
        <>
            <div className="form-group">
                    <label>Title:</label>
                    <input type="text" id="fileTitle"/>
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" id="fileAuthor"/>
                </div>
                <div className="form-group">
                    <label>Publisher:</label>
                    <input type="text" id="filePublisher"/>
                </div>
                <div className="form-group">
                    <label>Tags (comma separated):</label>
                    <input type="text" id="fileTags" placeholder="tag1, tag2, tag3"/>
                </div>
                <div className="form-group">
                    <label>Series:</label>
                    <input type="text" id="fileSeries"/>
                </div>
                <div className="form-group">
                    <label>Identifier:</label>
                    <input type="text" id="fileIdentifier" placeholder="ISBN, DOI, etc."/>
                </div>
        </>
    )
}