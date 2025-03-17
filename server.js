const express = require('express');
const { sequelize } = require('./models');
const taskroutes =require('./routes/TaskR')


const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/',taskroutes);

async function main(){
try{
    await sequelize.authenticate();
    console.log('db is connected successfully')

    await sequelize.sync();
    console.log('db schema synchronized') //update when nedded

    app.listen (PORT, () =>{
        console.log('server is running on :${PORT}');

    });
 } catch(error){
    console.error('error',error.message || error);
 }//finally{
   // await sequelize.close('db connection closed');
 //}

}

main();