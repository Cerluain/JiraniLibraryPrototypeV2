interface Props{
    enabling_metadata: boolean;
    onToggle: ()=>void
}
export default function MetadataEnableButton({enabling_metadata, onToggle}: Props){
    return <button className="btn btn-secondary" onClick={onToggle}>{ enabling_metadata? 'Add':'Hide'} File Details</button>
} 