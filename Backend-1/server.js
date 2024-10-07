const express = require("express");
const sequelize = require("./util/DB_Setting");
const UserModel = require('./model/UserModel')
const SignupRouter = require('./router/SignUpRouter')

const app = express();

app.use(express.json());

app.use('/sign', SignupRouter);
app.use('/login', SignupRouter);
app.use('/log', SignupRouter);


app.use((error, req, res, next)=>{
  return res.json({location : 'Error 핸들러', error});
})

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("5050 Port Start");
  });
});
