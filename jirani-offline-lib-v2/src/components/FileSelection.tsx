export default function FileSelect() {
    return (
    <div className="container-md">
        <div className="d-flex align-items-center gap-3">
        <button className='btn btn-outline-dark fs-4'>
            <i className="bi bi-file-earmark-plus">
                Select File
            </i>
        </button>
        <p className="mb-0 text-muted">No File Selected</p>
        </div>
    </div>
);
}