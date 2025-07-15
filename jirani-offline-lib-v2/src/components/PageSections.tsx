
import FileSelect from './FileSelection'
import MainMetadataSelection from './MainMetadataSelection'
import HeaderSection from './HeaderSection';

export default function PageSections() {
    return (
        <>
            <HeaderSection />
            <div className='container-md mt-4'>
                <div className="my-3 py-3 bg-light">
                    <FileSelect />
                </div>
                <div className="my-3 py-3">
                    <MainMetadataSelection />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className='btn btn-outline-dark fs-4'>
            
                    Upload Book to Library

        </button>
            </div>
        </>
    );
}   