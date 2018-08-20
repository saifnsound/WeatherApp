var request = require('request');

var getWeather = (results, callback) => {
    request({
        url: `https://api.darksky.net/forecast/199089917f59f46e5ac7dab70eaa7abd/${results.lat},${results.lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var temp = {
                temp: body.currently.temperature,
                appTemp: body.currently.apparentTemperature
            }
            callback(undefined, temp);
        } else {
            callback('Unable to fetch weather.');
        }
    })
}

module.exports ={
    getWeather
};