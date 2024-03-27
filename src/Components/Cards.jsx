import PropTypes from 'prop-types'
import Loading from './Loading';
import { Link } from 'react-router-dom'
import { useFilter } from '../hooks/useFilter';


// eslint-disable-next-line react/prop-types
let Card = ( {ImgSrc, CountryName, Population, Region, Capital, key, data} ) => {


  return (
    <Link className="card border " key={key} to={`/country/${CountryName}`} state={data}>
      <img src={ImgSrc} alt="" />
      <h2>{CountryName}</h2>
      <span><b>Population : </b>{Population}</span>
      <span><b>Region : </b>{Region}</span>
      <span><b>Capital : </b>{Capital}</span>
    </Link>
  )
}




// console.log(Data)


export default function Cards({Query ,Sorting}){

  let country = Query.toLowerCase();

  let filterData = useFilter(country);

  let container = filterData.map((value, index) => {

    return Card({
      key: index,
      ImgSrc: value.flags.png,
      CountryName: value.name.common,
      Population: value.population,
      Region: value.region,
      Capital: value.capital,
      data: value
    })
  })
  

  if (Sorting) {
    container.sort((a, b) => a.props.state.name.common.localeCompare(b.props.state.name.common)).reverse()
  } else if(!Sorting) (
    container.sort((a, b) => a.props.state.name.common.localeCompare(b.props.state.name.common))
  )
  
  
  return container === undefined ? (<Loading />) : (
    <div className='container' > {container}</div>
  )
}


Cards.propTypes={
  Query : PropTypes.string,
  Sorting : PropTypes.bool
}
