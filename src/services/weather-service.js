const MAIN_URL = "api.openweathermap.org/data/2.5"
const CITY_URL = "api.openweathermap.org/data/2.5/weather?q=denver&appid=01911f7b486c0e1468d2f43de9366608";
const APPID = "appid=01911f7b486c0e1468d2f43de9366608"

export const findWeatherForCity = (city) => {
    console.log(city)
    /* fetch(`${MAIN_URL}/weather?q=${city}&${APPID}`) */
    fetch("api.openweathermap.org/data/2.5/weather?q=denver&appid=01911f7b486c0e1468d2f43de9366608")
        .then(response => console.log(response))}

const api = {
    findWeatherForCity
}

export default api