interface Props {
    filename: string
}
export default function MP4VideoPlayer({ filename }: Props) {
    const api_url = "/video/"+filename;
    return (<>
        <video id="videoPlayer" width="650" controls autoPlay>
            <source src={api_url} type="video/mp4"/>
        </video>
    </>);
}