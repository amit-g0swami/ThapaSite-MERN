const mongoose = require("mongoose");

const connection_url = process.env.DB;

mongoose.connect(connection_url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() => {
    console.log("DB connected")
}).catch((err) => console.log("DB not connected"));