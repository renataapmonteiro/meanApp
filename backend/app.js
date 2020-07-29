const express = require('express'),
          app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin,X-Request-With,Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, PUT, OPTIONS"
    );
    next();
});

app.post('/api/posts',(req,res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post add Sucessfully'
    });
});


app.use('/api/posts',(req, res, next) => {
    const posts=[
        {
            id:'jhghftd212212', 
            title:'first server side post', 
            content:'this is coming from server'
        },
        {
            id:'jhghftd2123352', 
            title:'second server side post', 
            content:'this is coming from server'
        }
    ];
    res.status(200).json({
        message: 'Data fetched sucessfully!!!',
        posts: posts
    });
});


module.exports = app;