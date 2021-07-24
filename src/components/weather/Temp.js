import React, { useState, useEffect } from 'react'
import "./style.css"
import WeatherCard from './WeatherCard'

const Temp = () => {

    const [searchData, setSearchData] = useState("Mumbai")
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=7450e1534517642757676a1d1e064739`
            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            console.log(weathermood);

            const myWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country, sunset
            }
            setTempInfo(myWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..." autoFocus id="Search" className="searchTerm" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
                    <input className="searchButton" onClick={getWeatherInfo} type="submit" value="Search"/>
                </div>
            </div>

            <WeatherCard tempInfo={tempInfo}/>
        </>
    )
}

export default Temp
