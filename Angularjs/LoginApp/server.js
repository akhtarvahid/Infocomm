var express=require('express');
var app=express();
const bodyParser= require('body-parser');
var port = process.argv[2] || 8888;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
	console.log(`app listening on http://localhost:${port}`);
});
app.use('/js',express.static(__dirname + '/js'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
