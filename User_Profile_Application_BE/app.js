const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended:true,limit: '10mb'}));

const app_routes = require('./app/routes/app-route');
const index_route = require('./app/routes/index_route');
app.use("/",index_route);
app.use('/api/', app_routes);

const port = 8080 || 6600;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

module.exports = app;