const express = require('express'),
          app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PostsRoutes = require('./routes/posts');

mongoose.connect("mongodb://localhost/notesApp", { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log("Connected to database!!!")
})
.catch(()=>{
    console.log("Connection failed!!!")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.use("/api/posts", PostsRoutes);

module.exports = app;
