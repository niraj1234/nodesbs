const express = require('express');
const app = express();
app.use((req,res,next)=> {
   res.status(200).json({
    message:'Node SBS App is running after nodemon',
    port:'3000',
    developer:'Niraj'
   }) 
})

module.exports = app
