import PropTypes from 'prop-types'
import Loading from './Loading';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


// eslint-disable-next-line react/prop-types
let Card = ( {ImgSrc, CountryName, Population, Region, Capital, key} ) => {

  

  return (
    <Link className="card border " key={key} to={`/country/${CountryName}`}>
      <img src={ImgSrc} alt="" />
      <h2>{CountryName}</h2>
      <span><b>Population : </b>{Population}</span>
      <span><b>Region : </b>{Region}</span>
      <span><b>Capital : </b>{Capital}</span>
    </Link>
  )
}




// console.log(Data)


export default function Cards({Query}){

  let country = Query.toLowerCase();
  const [Data, setData] = useState([]);

  useEffect(() => {
    let countriesData = async () => {

      let data = await fetch("https://restcountries.com/v3.1/all");
      let json = await data.json();
      setData(json);
    }
    countriesData()
  }, [])


  let filterData = Data.filter(item => item.name.common.toLowerCase().includes(country) || item.region.toLowerCase().includes(country) ) ;

  let container = filterData.map((value, index) => {

    return Card({
      key: index,
      ImgSrc: value.flags.png,
      CountryName: value.name.common,
      Population: value.population,
      Region: value.region,
      Capital: value.capital,
    })
  })
  

  
  return container === undefined ? (<Loading />) : (
    <div className='container'>{container}</div>
  )
}


Cards.propTypes={
  Query : PropTypes.string
}
