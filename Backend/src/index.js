const express = require('express')
const userRouter = require('./routers/userdetails')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));

app.options('*', cors());
app.use(express.json())
app.use(userRouter)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
