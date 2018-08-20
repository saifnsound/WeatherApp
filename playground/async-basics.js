console.log('start');

setTimeout(() => {
    console.log('Delayed');
}, 2000);

setTimeout(() => {
    console.log('No Delay');
}, 0);

console.log('End');