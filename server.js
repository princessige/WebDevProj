const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
www-form-urlencoded
app.get('/', (req, res) => {
res.sendFile(__dirname + '/contact.html');
});
app.post('/contactForm', (req, res) => {
const name = req.body.name;
const email = req.body.email
const message = req.body.message
    
    console.log(`Received submission from: ${name}, ${email}, saying: ${message}`);
    
    
res.send(`Thanks for your message!`);
});
app.listen(port, () => {
console.log(`Server running on http://localhost:${port}`);
});
