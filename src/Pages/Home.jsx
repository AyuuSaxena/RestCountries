import  {  useEffect, useState } from 'react'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import PropTypes from 'prop-types'
import {  useParams } from 'react-router-dom';


export default function Home() {
    
    const [Query, setQuery] = useState('');
    const [Sorting, setSorting] = useState(false)

    const param =useParams();

    

    useEffect(()=>{
        let continent = param.continent === undefined ? '' : param.continent ;
        setQuery(continent);
    },[param])

    return (
        <>
            <Search setQuery={setQuery} setSorting={[Sorting, setSorting]}/>
            <Cards Query={Query} Sorting={Sorting}/>
        </>
    )
}

Home.propTypes={
    sort: PropTypes.string
}
