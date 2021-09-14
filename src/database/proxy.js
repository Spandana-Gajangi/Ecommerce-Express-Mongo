const mongoose = require("mongoose")

class Proxy {
    async sync() {
        mongoose.connect("mongodb://127.0.0.1/ecommerce")
        mongoose.connection.on("error", err => {
            console.log("err", err)
            throw err;
        })
        mongoose.connection.on("connected", (err, res) => {
            console.log("mongoose is connected")
        })
    }
}

module.exports.proxy = new Proxy()