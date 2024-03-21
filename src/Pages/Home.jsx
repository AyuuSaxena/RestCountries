import  { useState } from 'react'
import Search from '../Components/Search'
import Cards from '../Components/Cards'

export default function Home() {

    const [Query, setQuery] = useState('');

    return (
        <>
            <Search setQuery={setQuery} />
            <Cards Query={Query} />
        </>
    )
}
