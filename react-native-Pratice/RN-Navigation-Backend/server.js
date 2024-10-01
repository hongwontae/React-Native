const express = require('express');
const bodyParser = require('body-parser');
const ItemModel = require('./model/ItemModel');
const ItemRouter = require('./router/ItemRouter')
const cors = require('cors');

const sequelize = require('./util/DB-Setting');


const app = express();


app.use(cors());
app.use(express.json());

app.use('/get', ItemRouter);
app.use('/post', ItemRouter);
app.use('/delete', ItemRouter)

app.use((error, req, res, next)=>{
    return res.json({message : 'Error', errorData : error});
})


sequelize.sync().then((result)=>{
    app.listen(`5000`, ()=>{
        console.log('Start')
    })
})



