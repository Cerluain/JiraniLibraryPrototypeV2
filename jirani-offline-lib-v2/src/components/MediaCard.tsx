interface Props{
    book_title:string,
    date:string,
    author:string
}
export default function MediaCard({book_title,date,author}:Props){
    return (<>
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{book_title}</h5>
                <small>{date}</small>
            </div>
            <p className="mb-1">{author}</p>
        </a>
    </>);
}