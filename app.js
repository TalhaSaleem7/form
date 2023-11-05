const express = require('express')
const mongoose = require('mongoose')
const model12 = require('./model')
const cors = require('cors')




// This allows Express to parse JSON in the request body


const app = express()

app.use(express.json())

app.use(cors())


mongoose.connect('mongodb+srv://talhasaleem7177:talha123@cluster1.bnf5nar.mongodb.net/?retryWrites=true&w=majority')
.then(()=>
{
    console.log("DB Connected")
})


app.post('/signup',async(req,res)=>

{   
    const data =  new model12(req.body)
     await data.save()
    res.json(data)
    console.log(data)
})

            


// login api
app.post('/login',(req,res)=>
{
    const {email,password}= req.body;
    model12.findOne({email:email})
    .then(user=>
        {   if(user)
            
         {
            if(user.password===password)
            {
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
        }
        else(res.json("no record found"))

             }     

 ) })

//  get all data
app.get('/items', async (req, res) => {
    try {
      const items = await model12.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });






  // ...

app.put('/items/:id', async (req, res) => {
    try {
      const updatedItem = await model12.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
      res.json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.delete('/items/:id', async (req, res) => {
    try {
      const deletedItem = await model12.findByIdAndDelete(req.params.id);
      res.json(deletedItem);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  

app.listen(3000,()=>
{
    console.log("port connected")
})