import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react'

export default function DashboardList() {
    const [jsonFiles, setJsonFiles] = useState<any[] | null>(null);

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch('/api/getJSONFileList')
        
            if(!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);
        
            const data = await response.json()
                
            console.log("JSON DATA:", data)
            setJsonFiles(data);
        }
        fetchData();
        
    },[])
    
    const list_of_media_cards = 
            jsonFiles && jsonFiles.length > 0 ?
                jsonFiles.map((json_file, id) => (
                    <MediaCard book_title={json_file.title} author={json_file.author} date={json_file.timestamp} key={id} />
                ))
                : <h1>No Files</h1>;

    return (<>
        <div className="list-group">
            <MediaCard book_title={"My title"} author={"My author"} date={"My date"}/>
            {list_of_media_cards}
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
        </div>
    </>);
}