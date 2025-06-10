const routerUser = require('./userRoute');
const routerTask = require('./taskRoute');
const routerDespesa = require('./despesaRoute');
const { format, parseISO } = require('date-fns');


const express = require('express');
const app = express();

module.exports = (app, express) => {
    
    app.use(routerUser, routerTask, routerDespesa);
    }
