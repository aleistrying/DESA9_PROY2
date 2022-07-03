//express server
const config = require('./config');
const express = require('express');
const app = express();
const fs = require("fs")
const cors = require('cors');
const mongoose = require("mongoose")


const { port = 3000 } = config;

async function main() {
    console.log("Connected to MongoDB")

    //routes
    const pokeRoutes = require('./routes/pokeRoutes');
    const cacheRoutes = require('./routes/cacheRoutes');

    //internal middleware
    // const cacheMiddleware = require('./middleware/cacheInternalMiddleware');


    app.use(cors());



    //routes 
    app.use("/pokeapi", pokeRoutes);
    app.use("/cache", cacheRoutes);

    app.listen(port, () => console.log(`App listening on port ${port}!`));
}

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(main).catch(err => { console.log("Error connecting to MongoDB: ", err.message) })
