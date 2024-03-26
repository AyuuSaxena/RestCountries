import { useEffect, useState } from "react"
import Loading from "./Loading.jsx";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryNotfound from "./CountryNotfound.jsx";



export default function Card() {


    let params = useParams(); // to get query params value from url
    let countryName = params.country;
    
    let location = useLocation(); // to get data value from link using state attribute we can pass data there 
    let StoredData = location.state 
    
    const [countryData, setcountryData] = useState(null);
    const [notFound, setnotFound] = useState(false)

    const updateCountrydata = (object) => {
        let currencySymbol = "";

        if (Object.values(object.currencies)[0].symbol === undefined) {
            currencySymbol = "";
        } else {
            currencySymbol = ` (${Object.values(object.currencies)[0].symbol})`;
        }

        let filteredData = {
            png: object.flags.png,
            countryName: object.name.common,
            nativeName: object.name.official,
            population: object.population,
            region: object.region,
            subRegion: object.subregion,
            capital: object.capital,
            borderCountries: [], //?.join(" , ")
            tld: object.tld?.join(" , "),
            currency: Object.values(object.currencies)[0].name.concat(currencySymbol), // object.value converts object to array otherwise we can't access its properties because its key changes with country change/data 
            language: Object.values(object.languages)?.join(" , ")
        };

        setcountryData(filteredData);

        if (!object.borders) {
            object.borders = [];
        }

        Promise.all(object.borders.map((bdr) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${bdr}`)
                .then(res => res.json())
                .then(([data]) => data.name.common)
        })).then(borders => setcountryData(previousState => ({ ...previousState, borderCountries: borders })))
    }

    useEffect(() => {

        let countryDataFetch = async () => {
            try {
                
                if(!StoredData){
                    let data = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
                    let [json] = await data.json();  //destructuring of array
                    updateCountrydata(json);

                }else{
                    updateCountrydata(StoredData);
                }

            } catch (error) {
                // console.error(error)
                setnotFound(true)
            }
        }
        countryDataFetch(StoredData);
    }, [countryName,StoredData])


    return notFound ? <CountryNotfound /> : countryData === null ? (<Loading />) : ( // ternary operator for loading because it takes time to get the country data

        <div className="container justify-content-start">
            <button className="btn back " onClick={() => history.back()}><i className="fa-solid fa-arrow-left"></i> Back</button>
            <div className="cardContainer">
                <div className="flag">
                    <img src={countryData.png} alt="" />
                </div>
                <div className="content">
                    <h1>{countryData.countryName}</h1>
                    <div className="details">
                        <p >
                            <b>Native Name :</b>  {countryData.nativeName}
                        </p>
                        <p>
                            <b>Population :</b> {countryData.population}
                        </p>
                        <p>
                            <b>Region :</b> {countryData.region} 
                        </p>
                        <p>
                            <b>Sub region :</b> {countryData.subRegion} 
                        </p>
                        <p>
                            <b>Capital :</b> {countryData.capital} 
                        </p>
                        
                        <p>
                            <b>Top level domain :</b> {countryData.tld} 
                        </p>
                        <p>
                            <b>Currencies :</b> {countryData.currency} 
                        </p>
                        <p>
                            <b>Languages :</b> {countryData.language}
                        </p>
                        {countryData.borderCountries.length !== 0 && <p className="d-flex flex-wrap ">
                            <b>Border Countries :</b> {
                                
                                countryData.borderCountries.map((border) => {
                                    return <Link className="btn btn-light m-1 py-0 d-inline" key={border} to={`/country/${border}`} >{border}</Link>
                                })
                            }
                        </p>}
                        
                    </div>

                </div></div>
        </div>
    )
}
