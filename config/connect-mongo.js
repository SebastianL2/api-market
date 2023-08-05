const mongoose = require('mongoose');


const url = 'mongodb+srv://sebas16cely:ciYZvzIQRXN7sbUt@cluster0.yanapkl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(() => console.log('Connect DB Success'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

module.exports = mongoose;