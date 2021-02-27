'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const videoRoutes = require('./routes/videoroutes')

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors())

const router = express.Router();

app.get('/', (req, res) => {
  res.send('Backend for youtube')
})

app.use("/video", videoRoutes);

mongoose.connect(MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, 
  (err) => {
      if (!err) {
          console.log('Successfully Established Connection with MongoDB')
      }
      else {
          console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
      }
  }
);

app.listen(PORT, function () {
  console.log(`started on ${PORT}`)
}); 