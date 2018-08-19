var yargs = require('yargs');
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
    }
});