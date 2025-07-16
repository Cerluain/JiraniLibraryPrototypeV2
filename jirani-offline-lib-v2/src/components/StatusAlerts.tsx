import React from 'react'

interface Props {
    alertStatus: boolean,
    setAlertStatus: React.Dispatch<React.SetStateAction<boolean>>;
    message: string,
}
export default function StatusAlert({ alertStatus, setAlertStatus, message }: Props) {
    const handleExitClick = () => {
        setAlertStatus(false);
    }
    
    const alertJSX = <>
        
        <div className="alert alert-warning alert-dismissible fade show m-2" role="alert">
            <strong>{message}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleExitClick}></button>
        </div>
    </>

    return (<>
        {alertStatus && alertJSX}
        
    </>)
}