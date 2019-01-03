let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname)));



server.listen(port, () => {
    console.log("App is running on port " + port);
});