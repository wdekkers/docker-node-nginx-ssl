import Express from 'express';
import bodyParser from 'body-parser';

let app = Express();

// Enable CORS calls
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/json
app.use(bodyParser.json());

// Example static GET request
app.get('/', function (req, res) {
  console.log('Hit Route');
    res.json({"success": true});
});

// Start the server
app.listen(3000, function () {
  console.log('Example API listening on port 3000!');
});