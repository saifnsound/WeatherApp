var request = require('../node_modules/request');

var geocodeAdress = (address) => {
    return new Promise((resolve,reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address')
            } else if (body.status === 'OK') {
                var location = {
                    add: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                };
                resolve(location);
            } else {
                reject('API KEY EXPIRED');
            }
        });
    });
};

geocodeAdress('Daiict Gandhinagar').then((location) => {
    console.log(JSON.stringify(location, undefined, 4));
}, (error) => {
    console.log(error);
});