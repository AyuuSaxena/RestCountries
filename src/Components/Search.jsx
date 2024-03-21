import PropTypes from 'prop-types'


export default function Search({ setQuery }) {

    const value =(e)=>{
        e.preventDefault();
        let yoo =document.getElementsByTagName("input")[0].value;
        console.log(yoo)
    }

    
    
    return (
        <div className="search">
            <form className="d-flex flex" role="search" onSubmit={value}>
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
                    <li><button className="dropdown-item" >Action</button></li>
                    <li><button className="dropdown-item" >Another action</button></li>
                    <li><button className="dropdown-item" >Something else here</button></li>
                </ul>
            </div>
        </div>
    )
}


Search.propTypes ={
    setQuery : PropTypes.func
}