var yargs = require('yargs');
var request = require('request');
var geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 4));
        request({
            url: `https://api.darksky.net/forecast/199089917f59f46e5ac7dab70eaa7abd/${results.lat},${results.lng}`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                console.log(body.currently.temperature);
            } else {
                console.log('Unable to fetch weather.');
            }
        })
    }
});