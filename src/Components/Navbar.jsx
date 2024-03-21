import {useState} from 'react'

export default function Navbar() {

    const [Imgsrc, setImgsrc] = useState("https://cdn-icons-png.flaticon.com/512/1164/1164903.png")
    const [ModeName, setModeName] = useState("Light Mode");
    
    const Mode = () => {
        let body = document.getElementsByTagName('body')[0];

        if (!body.hasAttribute('data-bs-theme')){
            body.setAttribute('data-bs-theme', 'dark');
            setImgsrc("https://cdn-icons-png.flaticon.com/512/275/275915.png");
            setModeName("Dark Mode");
            
        }else{
            body.removeAttribute('data-bs-theme');
            setImgsrc("https://cdn-icons-png.flaticon.com/512/1164/1164903.png")
            setModeName("Light Mode");
            
        }
        
    }
    return (


        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Where in the world?</h1>

                    <button type="button" className="btn" onClick={Mode}> <img src={Imgsrc} alt=""  />{ModeName}</button>
                </div>
            </nav>
        </header>
    )
}
