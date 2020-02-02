const axios = require('axios');
const getWeather = async (coords) => {
    const instance = axios.create({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=c9ccc3c2c741972f50774fe1cf57d63b`,
    });
    const response = await instance.get();
    response.data.main.temp = `${(response.data.main.temp - 273.15).toFixed(2)} °C`;
    response.data.main.location = coords.location;
    return response.data.main;
};
module.exports = {
    getWeather
};
