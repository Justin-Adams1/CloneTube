const connectDB = require('./startup/db');
const express = require('express');
const cors = require('cors');
const app = express();
const Comment = require('./routes/ytclone');

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/ytclone', Comment)

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});