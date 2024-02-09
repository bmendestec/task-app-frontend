const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});