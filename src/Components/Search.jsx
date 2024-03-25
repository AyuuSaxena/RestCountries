import PropTypes from 'prop-types'


export default function Search({ setQuery }) {

  
    return (
        <div className="search">
            <form className="d-flex flex" role="search" >
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
                    setQuery(e.target.value);
                }}/>
                <i className="fa-solid fa-magnifying-glass" ></i>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>

            <div className="dropdown ">
                <button className="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu">

                    <li><button className="dropdown-item" >A to Z</button></li>
                    <li><button className="dropdown-item" >Population</button></li>
                </ul>
            </div>
        </div>
    )
}


Search.propTypes ={
    setQuery : PropTypes.func
}