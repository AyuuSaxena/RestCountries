import { useRouteError } from 'react-router-dom'
import '../Error.css'

export default function Error() {
    const error = useRouteError()
    // console.log(error);
    return (
        <>
            
            <div id="img" style={{}}>
                <img src="https://stories.freepiklabs.com/storage/8198/Error-404-01.svg" alt=""/>
            </div>

            <div style={{textAlign : "center"}}>Something went wrong. {error.status}</div>
        </>
    )
}