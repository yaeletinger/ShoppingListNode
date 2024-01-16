const express = require('express');
const cors = require('cors');
const http = require("http");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
require("./db/sqlConnect");
const category = require('./routes/category');

app.use('/categories', category);

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});

app.use(express.static(path.join(__dirname,"public")));




