const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));


app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;


    console.log(`Received submission from: ${name}, ${email}, saying: ${message}`);
    
    
    res.send('Received your message!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});