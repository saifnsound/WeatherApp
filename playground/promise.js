var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Enter a number');
            }
        }, 1000);
    });
};

asyncAdd(5, 7).then((sum) => {
    console.log('Sum:', sum);
    return asyncAdd(sum, '33');
}).then((sum) => {
    console.log('Sum:', sum);
}).catch((error) => {
    console.log('Error:', error);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hi. It worked');
//         // reject('Unable to fulfil promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (error) => {
//     console.log('Error:', error);
// });