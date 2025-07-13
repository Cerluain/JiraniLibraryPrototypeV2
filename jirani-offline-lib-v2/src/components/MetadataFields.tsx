import IndividualFormInput from "./IndividualFormInput"

export default function MetadataFields(){
    return(
        <>
            <form>
                <IndividualFormInput id="title1" label="Title" />
                <IndividualFormInput id="author1" label="Author" />
                <IndividualFormInput id="publisher1" label="Publisher" />
                <IndividualFormInput id="tags1" label="Tags [Comma Separated]" placeholderText="tag 1, tag 2, tag 3" />
                <IndividualFormInput id="series1" label="Series" />
                <IndividualFormInput id="identifier1" label="Identifier" placeholderText="ISBN, DOI, etc." />
            </form>
        </>
    )
}