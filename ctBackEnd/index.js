const express = require('express');
const connectDB = require("./startup/db");
const app = express();
const clonetube = require('./routes/clonetube');

connectDB();

app.use(express.json());
app.use('/api/collections', clonetube);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log((`Server started on port: ${port}`))
})