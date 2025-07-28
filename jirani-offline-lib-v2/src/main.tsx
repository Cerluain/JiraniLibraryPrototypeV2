import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './components/Dashboard'
import PageSections from './components/PageSections';
import ViewMedia from './components/ViewMedia';

function App(){

    const [currentPage,setCurrentPage] = useState<string>("home");
    const [filenameOfSelectedMedia, setFilenameOfSelectedMedia] = useState<string>("")

    function loadViewPage(nameOfSelectedFile: string){
        setFilenameOfSelectedMedia(nameOfSelectedFile);
        setCurrentPage("viewer");
    }

    function getPage(cur_page: string){
        switch(cur_page){
            case 'upload':
                return <PageSections setCurrentPage={setCurrentPage} />;
            case 'viewer':
                return <ViewMedia setCurrentPage={setCurrentPage} filenameOfSelectedMedia={filenameOfSelectedMedia}/>
            default: 
                return <Dashboard setCurrentPage={setCurrentPage} loadViewPage={loadViewPage}/>;
        }
    }
    return getPage(currentPage);
}
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
