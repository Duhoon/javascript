app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/detail', function (req, res) {
console.log(req.query); 
res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/detail', function (req, res) {
console.log(req.query);
res.send('Request parameters : '+req.query.email+', '+req.query.status)
});

app.use('/', router);