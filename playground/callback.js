var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Akshat'
    };

    setTimeout(() => {
        callback(user);
    }, 1000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});

console.log('User is:');