import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './components/Dashboard'
import PageSections from './components/PageSections';

function App(){
    const [currentPage,setCurrentPage] = useState<string>("home");
    function getPage(cur_page: string){
        switch(cur_page){
            case 'upload':
                return <PageSections setCurrentPage={setCurrentPage} />;
            default: 
                return <Dashboard setCurrentPage={setCurrentPage} />;
        }
    }
    return getPage(currentPage);
}
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
