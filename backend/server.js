const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Add = require('./models/addModel')
const app = express()


app.use(express.json())
app.use(cors());


app.get('/add', async(req, res)=>{
    try{
        const add = await Add.find({});
        res.status(200).json(add)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/add/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const add = await Add.find({id});
        res.status(200).json(add)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/add',async(req, res) =>{
    try{
        const add = await Add.create(req.body)
        res.status(200).json(add);

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.put('add/:id',async(req, res)=>{
    try {
        const {id} = req.params;
        const add = await Add.findByIdAndUpdate()
    } catch (error) {
        
    }
})



mongoose.connect('mongodb://127.0.0.1:27017/employee')
  .then(() => {
    app.listen(5000, ()=>{
        console.log('Server is running on port 5000')
    })
    console.log('Connected to Mongodb')

  }).catch((error)=>{
    console.log(error)
  })