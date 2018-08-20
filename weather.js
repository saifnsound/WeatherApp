var axios = require('axios');

var getWeather = (address) => {
    var encodedAddress = encodeURIComponent(address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    axios.get(geocodeUrl).then((response) => {

        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to locate the address.');
        } else if (response.data.status === 'OVER_QUERY_LIMIT') {
            throw new Error('API Not working');
        }

        var results = {
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng
        };
        var weatherURL = `https://api.darksky.net/forecast/199089917f59f46e5ac7dab70eaa7abd/${results.lat},${results.lng}`;

        return axios.get(weatherURL);

    }).then((response) => {

        var temperature = {
            temp: response.data.currently.temperature,
            appTemp: response.data.currently.apparentTemperature
        };

        console.log(`The Weather outside is ${temperature.temp}, but it feels like ${temperature.appTemp}.`);

    }).catch((e) => {

        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers.');
        } else {
            console.log(e.message);
        }
    });
};

module.exports = {
    getWeather
};