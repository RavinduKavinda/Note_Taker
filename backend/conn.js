const mongoose = require('mongoose')

const connectDB = (URL) => {
    mongoose.connect(URL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = connectDB;