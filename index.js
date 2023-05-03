const express=require("express");
const NODE_SEREVER=express();
const APP_Server=require('./appserver');
const PORT=8080; 
NODE_SEREVER.use('/',APP_Server);
try{
    NODE_SEREVER.listen(PORT,"localhost",()=>{
    console.log("Server started")
});
}
catch(error){
    console.log('error occured',error)
}
