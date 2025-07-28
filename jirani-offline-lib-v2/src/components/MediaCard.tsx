interface Props {
    filename: string,
    book_title: string,
    date: string,
    author: string
    clickEvent: (filename: string) => void
}
export default function MediaCard({ filename, book_title, date, author, clickEvent }: Props) {

    return (<>
        <a
        onClick={
            e =>{e.preventDefault(); console.log("Clicked filename: ", filename);clickEvent(filename);}
            } 
            href="#" 
            className="list-group-item list-group-item-action"
            aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{book_title}</h5>
                <small>{date}</small>
            </div>
            <p className="mb-1">{author}</p>
        </a>
    </>);
}