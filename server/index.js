// import express node pkg
const express = require('express')
const app = express()
const port = 4000
const requestLogger = require('./utils/requestLogger');
const router = require('./routes/router');
const errorHandler = require('./utils/errorHandler');

// This middleware will allow us to read the body of the contents shared with req
app.use(express.json());

app.use(requestLogger);

app.use('/router',router);
// app.use('/user',user);
// app.use('/posts',post);
// app.use('/electric',middleware)

// app.get('/', (req, res) => res.send('Hello World!'));

// app.post('/', (req, res) => {
//     // data shared by client is present in req.body
//     console.log(req.body);
//     res.send({success:true,message:"request completed"});
// });

app.use(errorHandler)
app.listen(port, () => {
    console.clear()
    console.log(`Server running on port ${port}!`)
})

