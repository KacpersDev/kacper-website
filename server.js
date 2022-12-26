const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const PORT = 3000;

app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({ extended: true }))

        server.post('/contact', (req, res) => {
            const name = req.body.name;
            const email = req.body.email;
            const message = req.body.message;
            console.log([name, email, message]);
            return res.redirect('/');
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + PORT);
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })