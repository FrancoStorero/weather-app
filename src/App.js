import "./App.css";
import { Buscador } from "./components/Buscador";
import { ButtonStyled } from "./components/ButtonStyled";
import { ContainerStyled } from "./components/ContainerStyled";
import { Display } from "./components/Display";
import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [loadingIcon, setLoadingIcon] = useState(false);
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [hour, setHour] = useState(10);

  const apiKey = "eea6d064f390455c60036cb2ab385923";

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const getWeatherLocation = async () => {
    setLoadingIcon(true);

    await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=es`,
    })
      .then((response) => {
        setData(response.data);
        setLoadingIcon(false);
        setCity(response.data.name);
        setCountry(response.data.sys.country);
        setTemp(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
        setDescription(response.data.weather[0].description);
        setFeelsLike(Math.round(response.data.main.feels_like));
        setHumidity(response.data.main.humidity);
        setWind(Math.round(response.data.wind.speed * 3.6));
        setHour(new Date().getUTCHours() + response.data.timezone / 60 / 60);
      })
      .catch((err) => {
        console.log(err);
        setLoadingIcon(false);
        setLocation("");
        console.log(`la ciudad "${location}" no puede encontrarla`);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!location || location === "" || location.length < 2) return setData("");

    getWeatherLocation();
  };

 
  return (
    <ContainerStyled hora={hour < 0 ? hour + 24 : hour > 23 ? hour - 24 : hour}>
      {loadingIcon ? (
        <div className="waiting">waiting...</div>
      ) : !data ? (
        <>
          <h1>Weather App</h1>
          <Buscador onChange={handleChange} />
          <ButtonStyled onClick={handleClick}>Search</ButtonStyled>
        </>
      ) : (
        <>
          <h1>Weather App</h1>
          <Buscador onChange={handleChange} />
          <ButtonStyled onClick={handleClick}>Search</ButtonStyled>
          <Display iconCode={icon}>
            <div className="name">
              {city}, {country}
            </div>
            <div className="temp">{temp}</div>
            <div className="descriptionContainer">
              <div className="icon"></div>
              <div className="description">{description}</div>
            </div>
            <div className="moreInfo">
              <div className="moreInfo-element">
                Sensación
                <p>{feelsLike}°C</p>
              </div>
              <div className="moreInfo-element">
                Humedad
                <p>{humidity}%</p>
              </div>
              <div className="moreInfo-element">
                Viento
                <p>{wind} Km/h</p>
              </div>
            </div>
          </Display>
        </>
      )}
    </ContainerStyled>
  );
}

export default App;
