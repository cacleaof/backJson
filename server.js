const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const router = require('./Routers/index');
const { format, parseISO } = require('date-fns');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
app.use(cors({origin: '*'}));

router(app, express );

app.listen(port, (error) => {
  if(error) {
    console.error(`Error starting server: ${error}`);
  } else {
    console.log(`Server is running on http://localhost:${port}`);   
  }});