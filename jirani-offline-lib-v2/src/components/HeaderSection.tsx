interface Props{
    sectionName:string
    setCurrentPage: (page:string)=>void
}

export default function HeaderSection({sectionName, setCurrentPage}:Props) {
    return (
        <>
            <nav className="py-2 bg-body-tertiary border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="#" onClick={() => setCurrentPage("home")} className="nav-link link-body-emphasis px-2 active" aria-current="page">Dashboard</a></li>
                        <li className="nav-item"><a href="#" onClick={() => setCurrentPage("upload")} className="nav-link link-body-emphasis px-2">Upload</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">About</a></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Login</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">{sectionName}</h1>
                    </div>
                </div>
            </header>
        </>
    );
}