const express = require('express');
const cors = require('cors');
require('./config/connect-mongo');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/product', require('./routes/product'));


app.listen(app.get('port'), () => {
    console.log(`Api is listen in port ${app.get('port')}`);
})