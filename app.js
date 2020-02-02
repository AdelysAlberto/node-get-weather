const { getLocation } = require('./location/index');
const { getWeather } = require('./weather');
const argv = require('yargs').options({
    location: {
        alias: 'd',
        desc: 'Direccion Ciudad para obtener clima',
        demand: true
    }
}).argv;
const encodeUrl = encodeURI(argv.location);

const giveMeData = async () => {
    const dataLocation = await getLocation(encodeUrl);
    if(!dataLocation){
        throw new Error(`Not have Results from ${argv.location}`)
    }
     const dataWeather = await getWeather(dataLocation);
    if(!dataWeather){
        throw new Error(`Not found Weather from ${argv.location}`)
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
