require('dotenv').config()
const express = require("express");
const { router } = require('./src/routes/route');
const { proxy } = require('./src/database/proxy');
const { errorHandler } = require("./src/middlewares/errorHandler");

const app = express()
const PORT = 3000

class App {
    bootstrap() {
        this.configuration()
    }

    async initConnections() {
        try {
            await proxy.sync();
        } catch (error) {
            console.log('------------_Error initializing connection------------', error);
            throw error;
        }
    }

    async configuration() {
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(router);
        app.use(errorHandler);

        await this.initConnections();
        const port = process.env.PORT
        app.listen(port, () => {
            console.log(`app is listening to PORT ${port}`)
        })
    }
}

new App().bootstrap();
