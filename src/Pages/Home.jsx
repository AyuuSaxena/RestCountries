import  { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import PropTypes from 'prop-types'


export default function Home({sort}) {
    
    const [Query, setQuery] = useState('');

    if (sort === undefined) {
        sort = ""
    }
    useEffect(()=>{
        setQuery(sort);
    },[sort])

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
