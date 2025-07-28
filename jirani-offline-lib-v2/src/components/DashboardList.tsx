import MediaCard from "./MediaCard";
import { useState, useEffect } from 'react'

interface Props{
    loadViewPage: (filename:string)=> void
}
export default function DashboardList({loadViewPage}:Props) {
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
                jsonFiles.filter(jsonFile => jsonFile.filename).map((json_file, id) => {
                    
                    console.log("Fetching internal filename: ", json_file.filename);
                    return <MediaCard clickEvent={loadViewPage} filename={json_file.filename} book_title={json_file.title} author={json_file.author} date={json_file.timestamp} key={id} />
                }
                )
                : <h1>No Files</h1>;

    return (<>
        <div className="list-group">
            
            {list_of_media_cards}
            
        </div>
    </>);
}