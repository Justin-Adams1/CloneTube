const express = require("express");
const connectDB = require("./startup/db");
const Clonetube = require("./routes/clonetube");

const app = express();

connectDB();

app.use(express.json());
app.use("/api/clonetube", Clonetube);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});