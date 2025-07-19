import IndividualFormInput from "./IndividualFormInput"

export default function MetadataFields(){
    return(
        <>
            <div className="card-body"> 
                <form>
                    <IndividualFormInput id="title" label="Title" />
                    <IndividualFormInput id="author" label="Author" />
                    <IndividualFormInput id="publisher" label="Publisher" />
                    <IndividualFormInput id="tags" label="Tags [Comma Separated]" placeholderText="tag 1, tag 2, tag 3" />
                    <IndividualFormInput id="series" label="Series" />
                    <IndividualFormInput id="identifier" label="Identifier" placeholderText="ISBN, DOI, etc." />
                </form>
            </div>
        </>
    )
}
