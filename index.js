require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());
 
app.get('/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Jose'
        },
        {
            id: 2,
            name: 'Desi'
        }
    ]

  res.json(users)//aqui se puede colocar el status de la peticion a usar
})
app.post('/users', (req, res) => {

    const user = req.body;
    user.id = 86546

    const result = {
        message: 'User Created',
        user
    }
    res.status(201).json(result)
  })
app.put('/users/:id', (req, res) => {

    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User Update',
        user
    }
    res.json(result)
  })
app.patch('/users/:id', (req, res) => {
    const {id} = req.params
    const user = req.body

    user.id = id


    const result = {
        message: 'User Update with Patch',
        user
    }
    res.json(result)
})
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = req.body

    user.id = id

    const result = {
        message: `User with id: ${id} User: ${user} Deleted`
    }
    res.json(result)    
})  
app.listen(port, () => {

    console.log(`******** APP Started. Port: ${port} ********`);
})