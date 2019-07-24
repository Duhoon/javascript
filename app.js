const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);