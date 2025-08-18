interface Props {
    sectionName: string
    setCurrentPage: (page: string) => void
}

export default function HeaderSection({ sectionName, setCurrentPage }: Props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Jirani Offlib</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a href="#" onClick={() => setCurrentPage("home")} className="nav-link link-body-emphasis px-2 active" aria-current="page">Dashboard</a>
                            </li>
                            <li className="nav-item disabled">
                                <a href="#" onClick={() => setCurrentPage("upload")} className="nav-link link-body-emphasis px-2">Upload</a>
                            </li>
                            <div className="d-flex">
                                <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Login</a></li>
                                <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Sign up</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="bg-dark py-1">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">{sectionName}</h1>
                    </div>
                </div>
            </header>
        </>
    );
}