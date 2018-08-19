var request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(error);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address')
        } else if (body.status === 'OK') {
            var location = {
                add: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            };
            callback(undefined, location);
        } else {
            callback('API KEY EXPIRED');
        }
    });
}

module.exports = {
    geocodeAddress
}