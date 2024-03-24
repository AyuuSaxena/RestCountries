import  { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';


export default function Home() {
    
    const [Query, setQuery] = useState('');
    const param =useParams();

    useEffect(()=>{
        let continent = param.continent === undefined ? '' : param.continent ;
        setQuery(continent);
    },[param])

    return (
        <>
            <Search setQuery={setQuery} />
            <Cards Query={Query} />
        </>
    )
}

Home.propTypes={
    sort: PropTypes.string
}
