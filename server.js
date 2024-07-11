const express = require('express');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = 3001;

app.use(express.json());

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});