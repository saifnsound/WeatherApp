var yargs = require('yargs');
var geocode = require('./geocode/geocode');
var weather = require('./weather/weather');

var argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (e, results) => {
    if (e) {
        console.log(e);
    } else {
        weather.getWeather(results, (e, results) => {
            if(e) {
                console.log(e);
            } else {
                console.log(`The Weather outside is ${results.temp}, but it feels like ${results.appTemp}.`);
            }
        });
    }
});