var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Received GET\n')
});

app.post('/ohmymock', (req, res) => {
    console.log(`Req: ${JSON.stringify(req.body)}`)
    res.json({
        receivedGreet: req.body
    })
})

app.listen(5000, () => console.log('Server started on port 5000'));