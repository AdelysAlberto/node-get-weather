const axios = require('axios');
const getLocation = async (city) => {
    const instance = axios.create({
        url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '490d6c6cbdmsh9ec5dcc1a17f9adp1bf195jsnb0e3d8392c05'}
    });

    const response = await instance.get();
    if( response.data.Results.length === 0){
        throw new Error('No hay resultados')
    }
    const data = response.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
};
module.exports = {
    getLocation
};
