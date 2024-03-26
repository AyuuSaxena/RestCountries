import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDark')));

    useEffect(() => {
        let body = document.body;
        if (!isDark) {
            body.removeAttribute('data-bs-theme');
            localStorage.setItem("isDark", false)
        } else {
            body.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem("isDark", true)

        }
    },[isDark])


    const Mode = () => {
        console.log(isDark)
        setisDark(!isDark)
    }
   


    return (


        <header>
            <nav className="navbar  bg-body-tertiary  px-3">
                <div className="container-fluid">
                    <Link className="navbar-brand"  to="/">Where in the world?</Link>
                    <button type="button" className="btn" onClick={Mode}> <img src={isDark ? "https://cdn-icons-png.flaticon.com/512/275/275915.png" : "https://cdn-icons-png.flaticon.com/512/1164/1164903.png"} alt="" />{isDark ? "Dark Mode" : "Light Mode"}</button>


                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className= "offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Continents</h5>
                            <button type="button" className="btn-close" data-bs-toggle="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item" data-bs-toggle="offcanvas">
                                    <Link className="nav-link active" aria-current="page" to="/"  >ALL</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="offcanvas" >
                                    <Link className="nav-link " aria-current="page" to="/Africa"   >Africa</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="offcanvas">
                                    <Link className="nav-link" to="/Americas"   >Americas</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="offcanvas">
                                    <Link className="nav-link" to="/Antarctica"   >Antarctica</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="offcanvas">
                                    <Link className="nav-link" to="/Asia"   >Asia</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="offcanvas">
                                    <Link className="nav-link" to="/Europe"   >Europe</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="offcanvas">
                                    <Link className="nav-link" to="/Oceania"   >Oceania</Link>
                                </li>
                                
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/NorthAmerica">North America</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/SouthAmerica">South America</Link>
                                </li> */}
                                
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
