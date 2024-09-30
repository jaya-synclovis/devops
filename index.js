const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello Jaya!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;