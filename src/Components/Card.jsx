import { useEffect, useState } from "react"
import Loading from "./Loading.jsx";
import { Link, useParams } from "react-router-dom";
import CountryNotfound from "./CountryNotfound.jsx";



export default function Card() {

    let params = useParams(); // to get query params value from url
    let countryName = params.country;
    const [countryData, setcountryData] = useState(null);
    const [notFound, setnotFound] = useState(false)

    useEffect(() => {

        let countryDataFetch = async () => {
            try {
                let data = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
                let json = await data.json();
                let [object] = json; //destructuring of array

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
                    borderCountries: object.borders?.join() === undefined ? "None" : object.borders?.join(" , "),
                    tld: object.tld?.join(" , "),
                    currency: Object.values(object.currencies)[0].name.concat(currencySymbol), // object.value converts object to array otherwise we can't access its properties because its key changes with country change/data 
                    language: Object.values(object.languages)?.join(" , ")
                };

                setcountryData(filteredData)
            } catch (error) {
                setnotFound(true)
            }
        }
        countryDataFetch();
    }, [])

    // console.log(countryData)


    return notFound ? <CountryNotfound/> : countryData === null ? (<Loading />) : ( // ternary operator for loading because it takes time to get the country data

        <div className="container">
            <button className="btn back" onClick={()=> history.back()}><i className="fa-solid fa-arrow-left"></i> Back</button>
            <div className="cardContainer">
                <div className="flag">
                    <img src={countryData.png} alt="" />
                </div>
                <div className="content">
                    <h1>{countryData.countryName}</h1>
                    <div className="details">
                        <p><b>Native Name :</b>  {countryData.nativeName}</p>
                        <p><b>Population :</b> {countryData.population}</p>
                        <p><b>Region :</b> {countryData.region} </p>
                        <p><b>Sub region :</b> {countryData.subRegion} </p>
                        <p><b>Capital :</b> {countryData.capital} </p>
                        <p><b>Border Countries :</b> {countryData.borderCountries}</p>
                        <p><b>Top level domain :</b> {countryData.tld} </p>
                        <p><b>Currencies :</b> {countryData.currency} </p>
                        <p><b>Languages :</b> {countryData.language}</p>
                    </div>

                </div></div>
        </div>
    )
}
