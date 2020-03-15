const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
  'mongodb://localhost:27017/fakebook', 
  { useNewUrlParser: true, useUnifiedTopology: true },
)
.then(async () => {
  app.listen(8080, () =>{
    console.log('server listening on port: 8080');
  });
})
.catch((err) => console.log(err));
