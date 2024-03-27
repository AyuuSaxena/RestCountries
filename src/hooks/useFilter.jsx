import { useEffect, useState } from "react";

export function useFilter(filter) {

    const [Data, setData] = useState([]);

    useEffect(() => {
         fetch('https://restcountries.com/v3.1/all')
             .then(res => res.json())
             .then(data => setData(data)).catch(err => console.error(err))
    }, [])

        let filterData = Data.filter(item => item.name.common.toLowerCase().includes(filter) || item.region.toLowerCase().includes(filter));
        return filterData
}
