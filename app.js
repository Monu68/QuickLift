const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');

connectToDb()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send("Helloooo woooorld");
})

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;