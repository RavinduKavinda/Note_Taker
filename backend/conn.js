const mongoose = require('mongoose')

const connectDB = (DATABASE_URL) => {
    mongoose.connect(DATABASE_URL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = connectDB;