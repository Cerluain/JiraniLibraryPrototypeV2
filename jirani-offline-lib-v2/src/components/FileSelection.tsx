interface Props{
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}
export default function FileSelect({onFileChange}:Props) {
    return (
    <div className="m-3">
        <form action="/upload" method="POST" encType="multipart/form-data">
            <div className="mb-3">
                <label className="form-label"> Select Media you want to Upload</label>
                <input onChange={onFileChange} className="form-control fs-4" type="file" name="file" />
            </div>
            
        </form>
        
        
    </div>
);
}