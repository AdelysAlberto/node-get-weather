const { getLocation } = require('./location/index');
const { getWeather } = require('./weather');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion Ciudad para obtener clima',
        demand: true
    }
}).argv;
const encodeUrl = encodeURI(argv.direccion);

const giveMeData = async () => {
    const dataLocation = await getLocation(encodeUrl);
    if(!dataLocation){
        throw new Error('No hay resultados de Location')
    }
     const dataWeather = await getWeather(dataLocation);
    if(!dataWeather){
        throw new Error('No hay resultados de Clima')
    }
    return dataWeather
};

giveMeData()
    .then(res => {
        console.log(res);
        return res
    })
    .catch(err=>
        console.log('err', err)
    );
