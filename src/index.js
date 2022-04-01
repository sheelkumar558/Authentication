const express = require("express");
const connect = require("./configs/db");

const userController = require('./controllers/user.controller');
const { register, login } = require('./controllers/auth.controller');
const productController = require("./controllers/product.controller");
const app = express();
app.use(express.json());

app.use('/users',userController);

app.post('/register',register);
app.post('/login',login);
app.use("/products",productController)
app.listen(4444, async()=>{
    try{
      await connect();
      console.log("listening on port 4444");
    }catch(e){
        console.error({message:e.message});
    }
});