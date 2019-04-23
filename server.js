let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Ponemos las rutas en un archivo aparte para mantener el orden
let routes = require('./api/routes/apiRoutes'); 
routes(app);


app.listen(port);

console.log('RESTful API server started on: ' + port);
